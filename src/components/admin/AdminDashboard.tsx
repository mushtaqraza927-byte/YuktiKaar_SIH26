import React, { useState, useEffect, useMemo } from 'react';
import {
  Shield,
  Lock,
  Search,
  Download,
  Filter,
  RefreshCw,
  ExternalLink,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Send,
  Eye,
  Trash2,
  Sparkles,
  ArrowUpDown,
  BookOpen,
  Scale,
  Users,
  Building,
  Key,
  ChevronRight,
  X,
  FileSpreadsheet,
  Check,
  Copy,
  LogOut,
  PlusCircle,
  HelpCircle
} from 'lucide-react';
import { useAuth, ADMIN_EMAIL, ADMIN_PASSWORD } from '../../context/AuthContext';
import { queryStore, UserQueryRecord } from '../../services/queryStore';
import { IPType, Jurisdiction } from '../../types';

interface AdminDashboardProps {
  onNavigateHome?: () => void;
  onNavigateToAssistant?: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onNavigateHome,
  onNavigateToAssistant
}) => {
  const { isAdmin, loginAdmin, logoutAdmin, user } = useAuth();

  // Login form state (if not admin)
  const [emailInput, setEmailInput] = useState(ADMIN_EMAIL);
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);

  // Queries state
  const [queries, setQueries] = useState<UserQueryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIPFilter, setSelectedIPFilter] = useState<string>('all');
  const [selectedJurisdictionFilter, setSelectedJurisdictionFilter] = useState<string>('all');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');

  // Detail Modal state
  const [activeQuery, setActiveQuery] = useState<UserQueryRecord | null>(null);
  const [editNotes, setEditNotes] = useState('');
  const [editStatus, setEditStatus] = useState<UserQueryRecord['status']>('Answered');
  const [copiedId, setCopiedId] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Load queries
  const reloadQueries = () => {
    setQueries(queryStore.getAllQueries());
  };

  useEffect(() => {
    reloadQueries();
  }, []);

  // Handle Admin Login
  const handleAdminLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);
    setLoginLoading(true);

    try {
      const res = await loginAdmin(emailInput, passwordInput);
      if (!res.success) {
        setLoginError(res.error || 'Authentication failed. Please verify credentials.');
      } else {
        reloadQueries();
        triggerToast('Welcome Admin! Connected to YUKTI-KAAR Command Center.');
      }
    } catch {
      setLoginError('Error connecting to authentication service.');
    } finally {
      setLoginLoading(false);
    }
  };

  const handleFillCredentials = () => {
    setEmailInput(ADMIN_EMAIL);
    setPasswordInput(ADMIN_PASSWORD);
    setLoginError(null);
  };

  const triggerToast = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  // Filtered queries calculation
  const filteredQueries = useMemo(() => {
    return queries
      .filter((q) => {
        // Search term
        if (searchQuery.trim()) {
          const s = searchQuery.toLowerCase();
          const matchQuery = q.queryText.toLowerCase().includes(s);
          const matchUser = (q.userName || '').toLowerCase().includes(s) || (q.userEmail || '').toLowerCase().includes(s);
          const matchId = q.id.toLowerCase().includes(s);
          const matchSummary = (q.answerSummary || '').toLowerCase().includes(s);
          const matchNotes = (q.notes || '').toLowerCase().includes(s);
          if (!matchQuery && !matchUser && !matchId && !matchSummary && !matchNotes) {
            return false;
          }
        }

        // IP filter
        if (selectedIPFilter !== 'all' && q.ipType !== selectedIPFilter) {
          return false;
        }

        // Jurisdiction filter
        if (selectedJurisdictionFilter !== 'all' && q.jurisdiction !== selectedJurisdictionFilter) {
          return false;
        }

        // Status filter
        if (selectedStatusFilter !== 'all' && q.status !== selectedStatusFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        const timeA = new Date(a.timestamp).getTime();
        const timeB = new Date(b.timestamp).getTime();
        return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
      });
  }, [queries, searchQuery, selectedIPFilter, selectedJurisdictionFilter, selectedStatusFilter, sortOrder]);

  // Statistics
  const stats = useMemo(() => queryStore.getStats(), [queries]);

  // Handle Export CSV
  const handleExportCSV = () => {
    const csvData = queryStore.exportToCSV();
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `yukti-kaar-queries-${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast('Inquiries exported successfully as CSV.');
  };

  // Simulate a live user query for evaluation presentation
  const handleSimulateUserQuery = () => {
    const sampleInquiries: Array<{
      q: string;
      ip: IPType;
      juris: Jurisdiction;
      name: string;
      email: string;
      summary: string;
    }> = [
      {
        q: 'How to file an expedited examination under Rule 24B for our women-led biotech startup in Hyderabad?',
        ip: 'patent',
        juris: 'india',
        name: 'Sunita Rao (BioGenX Labs)',
        email: 'sunita.rao@biogenx.org',
        summary: 'Form 18A filed under Rule 24B(1)(b) allows expedited examination for startups and female natural persons, shortening first examination report (FER) turnaround to 2-3 months.'
      },
      {
        q: 'Can our SaaS platform trademark be rejected if a similar name exists in the United States but not in India?',
        ip: 'trademark',
        juris: 'india',
        name: 'Karan Mehra (SaaSScale)',
        email: 'karan@saasscale.io',
        summary: 'Under the territoriality principle and Toyota Jidosha Kabushiki Kaisha precedent, trans-border reputation must be established in India. However, prior worldwide use may ground opposition under Section 11(6) well-known marks.'
      },
      {
        q: 'Protecting UI/UX wireframes and mobile app animations under Indian law.',
        ip: 'design',
        juris: 'india',
        name: 'Tara Sethi (FinFlow App)',
        email: 'tara.sethi@finflow.app',
        summary: 'Screen displays and dynamic graphical user interfaces (GUIs) are currently registered under Class 14-04 of the Locarno Classification under Designs Rules, or as artistic/cinematograph works under Copyright Act 1957.'
      }
    ];

    const randomItem = sampleInquiries[Math.floor(Math.random() * sampleInquiries.length)];
    queryStore.addQuery({
      userName: randomItem.name,
      userEmail: randomItem.email,
      queryText: randomItem.q,
      ipType: randomItem.ip,
      jurisdiction: randomItem.juris,
      status: 'Answered',
      confidence: 'high',
      answerSummary: randomItem.summary,
      keyPoints: ['Statutory assessment conducted', 'Actionable recommendations cataloged'],
      citationsCount: 2,
      facilitatorRequested: false,
      notes: 'Real-time inquiry received from active innovator portal.'
    });

    reloadQueries();
    triggerToast(`New inquiry from ${randomItem.name} logged into dashboard!`);
  };

  const handleOpenDetail = (q: UserQueryRecord) => {
    setActiveQuery(q);
    setEditNotes(q.notes || '');
    setEditStatus(q.status);
  };

  const handleSaveDetailChanges = () => {
    if (!activeQuery) return;
    queryStore.updateStatus(activeQuery.id, editStatus, editNotes);
    reloadQueries();
    setActiveQuery(null);
    triggerToast(`Query #${activeQuery.id} updated successfully.`);
  };

  const handleDeleteQuery = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (confirm(`Are you sure you want to delete inquiry #${id}?`)) {
      queryStore.deleteQuery(id);
      reloadQueries();
      if (activeQuery?.id === id) setActiveQuery(null);
      triggerToast(`Inquiry #${id} deleted.`);
    }
  };

  const handleResetDefaultSeed = () => {
    if (confirm('Reset queries to default SIH seed records? Current local records will be restored to initial showcase.')) {
      queryStore.resetToDefaultSeed();
      reloadQueries();
      triggerToast('Reset to initial sample queries.');
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  // ----------------------------------------------------
  // VIEW: Admin Login Screen (if not authenticated)
  // ----------------------------------------------------
  if (!isAdmin) {
    return (
      <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/50">
        <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-200">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-700 border border-amber-200">
              <Shield className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              YUKTI-KAAR Admin Portal
            </h1>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Command Center for Monitoring Real-Time Innovator Inquiries, AI Grounding, and Facilitator Escalations.
            </p>
          </div>

          {/* Quick Credential Helper Banner */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/90 text-xs text-amber-950 space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold flex items-center gap-1.5 text-amber-900">
                <Key className="w-3.5 h-3.5 text-amber-700" />
                <span>SIH 2026 Admin Credentials</span>
              </span>
              <button
                type="button"
                onClick={handleFillCredentials}
                className="text-[11px] font-semibold text-amber-800 hover:text-amber-950 underline cursor-pointer"
              >
                1-Click Autofill
              </button>
            </div>
            <div className="font-mono text-[11px] bg-white p-2 rounded border border-amber-200/80 space-y-1 text-slate-700">
              <div>Email: <strong className="text-slate-900">adminYK26@gmail.com</strong></div>
              <div>Pass: <strong className="text-slate-900">Sih@2026</strong></div>
            </div>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="adminYK26@gmail.com"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none placeholder:text-slate-400 text-slate-900 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Security Password
              </label>
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none placeholder:text-slate-400 text-slate-900 bg-white"
              />
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {loginLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Verifying Credentials...</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Access Admin Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Return link */}
          <div className="text-center pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onNavigateHome}
              className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
            >
              ← Back to Innovator Portal
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // VIEW: Full Authenticated Admin Dashboard
  // ----------------------------------------------------
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed bottom-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-2 text-xs border border-slate-700 animate-in slide-in-from-bottom-2 duration-150">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Top Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold border border-amber-300 flex items-center gap-1">
              <Shield className="w-3 h-3 text-amber-700" />
              <span>SUPER ADMIN PORTAL</span>
            </span>
            <span className="text-xs text-slate-400">SIH 2026 Edition</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            User Query &amp; Engagement Intelligence
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 max-w-2xl">
            Live telemetry of questions submitted by Indian innovators, automated statutory classification, citation depth, and facilitator escalations.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleSimulateUserQuery}
            className="px-3.5 py-2 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
            title="Inject a realistic innovator query to demonstrate real-time logging"
          >
            <PlusCircle className="w-4 h-4 text-amber-600" />
            <span>Simulate User Query</span>
          </button>

          <button
            type="button"
            onClick={handleExportCSV}
            className="px-3.5 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-2xs hover:shadow-xs cursor-pointer"
          >
            <Download className="w-4 h-4 text-slate-500" />
            <span>Export CSV</span>
          </button>

          <button
            type="button"
            onClick={logoutAdmin}
            className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition-all shadow-2xs cursor-pointer"
            title="Logout from Admin"
          >
            <LogOut className="w-4 h-4 text-slate-300" />
            <span>Exit Admin</span>
          </button>
        </div>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Total Queries */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Total Inquiries</span>
            <Users className="w-4 h-4 text-slate-400" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.total}</div>
          <div className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
            <span>Live local &amp; cloud stream</span>
          </div>
        </div>

        {/* Answered & Grounded */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Answered (AI RAG)</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.answered}</div>
          <div className="text-[11px] text-slate-500">
            {stats.total > 0 ? Math.round((stats.answered / stats.total) * 100) : 0}% success rate
          </div>
        </div>

        {/* Escalated to Facilitator */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Facilitator Escalations</span>
            <Building className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl font-bold text-amber-700">{stats.escalated}</div>
          <div className="text-[11px] text-slate-500">SIPP Scheme assistance</div>
        </div>

        {/* Pending Review / Flagged */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Pending / Flagged</span>
            <AlertTriangle className="w-4 h-4 text-rose-500" />
          </div>
          <div className="text-2xl font-bold text-slate-900">{stats.pending + stats.flagged}</div>
          <div className="text-[11px] text-rose-600 font-medium">Needs attorney review</div>
        </div>

        {/* Indian vs PCT Jurisdiction */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-2xs space-y-1 col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between text-slate-500">
            <span className="text-xs font-medium uppercase tracking-wider">Jurisdiction</span>
            <Scale className="w-4 h-4 text-indigo-500" />
          </div>
          <div className="text-sm font-bold text-slate-900 pt-1 flex items-center justify-between">
            <span>India IPO: {stats.indiaCount}</span>
            <span className="text-slate-400">|</span>
            <span>PCT/WIPO: {stats.pctCount}</span>
          </div>
          <div className="text-[11px] text-slate-500">CGPDTM / WIPO split</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search inquiries by keyword, user email, ID, topic, or statute..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-200 focus:border-slate-800 focus:ring-1 focus:ring-slate-800 focus:outline-none placeholder:text-slate-400 text-slate-900"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {/* IP Domain Dropdown */}
            <select
              value={selectedIPFilter}
              onChange={(e) => setSelectedIPFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All IP Domains</option>
              <option value="patent">Patents</option>
              <option value="trademark">Trademarks</option>
              <option value="copyright">Copyrights</option>
              <option value="design">Industrial Designs</option>
              <option value="gi">Geographical Indications</option>
              <option value="trade-secret">Trade Secrets</option>
            </select>

            {/* Jurisdiction Dropdown */}
            <select
              value={selectedJurisdictionFilter}
              onChange={(e) => setSelectedJurisdictionFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All Jurisdictions</option>
              <option value="india">Indian Law (CGPDTM)</option>
              <option value="pct">PCT / International (WIPO)</option>
            </select>

            {/* Status Dropdown */}
            <select
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none focus:border-slate-800"
            >
              <option value="all">All Statuses</option>
              <option value="Answered">Answered</option>
              <option value="Escalated to Facilitator">Escalated</option>
              <option value="Pending Review">Pending Review</option>
              <option value="Flagged">Flagged</option>
            </select>

            {/* Sort Toggle */}
            <button
              type="button"
              onClick={() => setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest')}
              className="px-3 py-2 text-xs rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
              <span>{sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}</span>
            </button>

            {/* Reset Seed Button */}
            <button
              type="button"
              onClick={handleResetDefaultSeed}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              title="Reset queries to default showcase seed"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Filter Pills Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
          <div>
            Showing <strong className="text-slate-900">{filteredQueries.length}</strong> of{' '}
            <strong className="text-slate-900">{queries.length}</strong> recorded innovator inquiries
          </div>
          {(searchQuery || selectedIPFilter !== 'all' || selectedJurisdictionFilter !== 'all' || selectedStatusFilter !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedIPFilter('all');
                setSelectedJurisdictionFilter('all');
                setSelectedStatusFilter('all');
              }}
              className="text-amber-800 hover:text-amber-950 font-semibold underline cursor-pointer"
            >
              Clear all filters
            </button>
          )}
        </div>
      </div>

      {/* Queries Table */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-700">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
              <tr>
                <th className="px-4 py-3.5">Inquiry ID</th>
                <th className="px-4 py-3.5">Innovator / User</th>
                <th className="px-4 py-3.5">Domain &amp; Jurisdiction</th>
                <th className="px-4 py-3.5 max-w-md">Question Summary</th>
                <th className="px-4 py-3.5">Status</th>
                <th className="px-4 py-3.5">Time</th>
                <th className="px-4 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredQueries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-12 text-slate-400 space-y-2">
                    <HelpCircle className="w-8 h-8 mx-auto text-slate-300" />
                    <div>No user inquiries match your search criteria.</div>
                    <button
                      type="button"
                      onClick={handleSimulateUserQuery}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200"
                    >
                      <PlusCircle className="w-3.5 h-3.5" />
                      <span>Inject a Test Inquiry</span>
                    </button>
                  </td>
                </tr>
              ) : (
                filteredQueries.map((q) => {
                  return (
                    <tr
                      key={q.id}
                      onClick={() => handleOpenDetail(q)}
                      className="hover:bg-amber-50/40 transition-colors cursor-pointer group"
                    >
                      {/* ID */}
                      <td className="px-4 py-3 font-mono font-bold text-slate-900 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                          <span>{q.id}</span>
                        </div>
                      </td>

                      {/* User */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="font-semibold text-slate-900">{q.userName}</div>
                        <div className="text-[11px] text-slate-400 font-mono truncate max-w-[140px]">
                          {q.userEmail}
                        </div>
                      </td>

                      {/* Domain & Jurisdiction */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <div className="flex flex-col gap-1 items-start">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                              q.ipType === 'patent'
                                ? 'bg-blue-100 text-blue-800'
                                : q.ipType === 'trademark'
                                ? 'bg-purple-100 text-purple-800'
                                : q.ipType === 'copyright'
                                ? 'bg-emerald-100 text-emerald-800'
                                : q.ipType === 'design'
                                ? 'bg-amber-100 text-amber-800'
                                : q.ipType === 'gi'
                                ? 'bg-rose-100 text-rose-800'
                                : 'bg-slate-100 text-slate-800'
                            }`}
                          >
                            {q.ipType}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {q.jurisdiction === 'india' ? '🇮🇳 India IPO' : '🌐 PCT / WIPO'}
                          </span>
                        </div>
                      </td>

                      {/* Question */}
                      <td className="px-4 py-3 max-w-xs sm:max-w-md">
                        <div className="font-medium text-slate-900 line-clamp-2 leading-relaxed">
                          {q.queryText}
                        </div>
                        {q.answerSummary && (
                          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            ↳ {q.answerSummary}
                          </div>
                        )}
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                            q.status === 'Answered'
                              ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                              : q.status === 'Escalated to Facilitator'
                              ? 'bg-amber-50 text-amber-800 border border-amber-200'
                              : q.status === 'Flagged'
                              ? 'bg-rose-50 text-rose-700 border border-rose-200'
                              : 'bg-blue-50 text-blue-700 border border-blue-200'
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              q.status === 'Answered'
                                ? 'bg-emerald-500'
                                : q.status === 'Escalated to Facilitator'
                                ? 'bg-amber-500'
                                : q.status === 'Flagged'
                                ? 'bg-rose-500'
                                : 'bg-blue-500'
                            }`}
                          />
                          <span>{q.status}</span>
                        </span>
                      </td>

                      {/* Time */}
                      <td className="px-4 py-3 whitespace-nowrap text-slate-400 text-[11px]">
                        {q.formattedTime}
                      </td>

                      {/* Action */}
                      <td className="px-4 py-3 text-right whitespace-nowrap">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenDetail(q);
                            }}
                            className="p-1.5 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                            title="Inspect query & statutory citations"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => handleDeleteQuery(q.id, e)}
                            className="p-1.5 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
                            title="Delete query record"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Query Detail Modal */}
      {activeQuery && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto"
          onClick={() => setActiveQuery(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs">
                  <span className="text-amber-400 mr-0.5">Y</span>K
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-bold text-slate-900">
                      Query #{activeQuery.id}
                    </span>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(activeQuery.id)}
                      className="text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
                      title="Copy Reference ID"
                    >
                      {copiedId ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Logged: {new Date(activeQuery.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveQuery(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 overflow-y-auto flex-1 text-xs">
              {/* Innovator & Domain Info Card */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Innovator / Entity
                  </span>
                  <div className="font-bold text-slate-900 mt-0.5">{activeQuery.userName}</div>
                  <div className="text-slate-500 font-mono text-[11px]">{activeQuery.userEmail}</div>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold block">
                    Classification &amp; Jurisdiction
                  </span>
                  <div className="font-bold text-slate-900 uppercase mt-0.5">{activeQuery.ipType}</div>
                  <div className="text-slate-500">
                    {activeQuery.jurisdiction === 'india' ? 'Indian Law (CGPDTM / IPO)' : 'International (PCT / WIPO)'}
                  </div>
                </div>
              </div>

              {/* Original Query */}
              <div className="space-y-1.5">
                <label className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] block">
                  Original User Inquiry
                </label>
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-slate-900 text-sm leading-relaxed font-medium">
                  "{activeQuery.queryText}"
                </div>
              </div>

              {/* AI Statutory Answer Summary */}
              {activeQuery.answerSummary && (
                <div className="space-y-1.5">
                  <label className="text-slate-500 font-semibold uppercase tracking-wider text-[10px] flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>Statutory Grounding &amp; AI Analysis</span>
                  </label>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-slate-800 leading-relaxed space-y-2.5">
                    <p className="font-medium text-slate-900">{activeQuery.answerSummary}</p>
                    {activeQuery.keyPoints && activeQuery.keyPoints.length > 0 && (
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                        {activeQuery.keyPoints.map((pt, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}

              {/* Status and Admin Legal Notes */}
              <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Inquiry Lifecycle Status
                  </label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 bg-white font-medium text-slate-900 focus:outline-none focus:border-slate-800"
                  >
                    <option value="Answered">Answered</option>
                    <option value="Escalated to Facilitator">Escalated to Facilitator</option>
                    <option value="Pending Review">Pending Review</option>
                    <option value="Flagged">Flagged</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-700 mb-1">
                    Internal Legal Review Notes
                  </label>
                  <input
                    type="text"
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="e.g. Attorney reviewed; SIPP eligibility verified"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-slate-800 text-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between shrink-0">
              <button
                type="button"
                onClick={() => {
                  queryStore.deleteQuery(activeQuery.id);
                  reloadQueries();
                  setActiveQuery(null);
                  triggerToast(`Inquiry #${activeQuery.id} removed.`);
                }}
                className="text-rose-600 hover:text-rose-700 text-xs font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Delete Record</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveQuery(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveDetailChanges}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
