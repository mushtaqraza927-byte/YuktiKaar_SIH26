import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldAlert } from 'lucide-react';
import { IPType, Jurisdiction } from '../../types';

interface EscalationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
  initialIPType?: IPType;
  initialJurisdiction?: Jurisdiction;
}

export const EscalationModal: React.FC<EscalationModalProps> = ({
  isOpen,
  onClose,
  initialQuestion = '',
  initialIPType = 'patent',
  initialJurisdiction = 'india'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [entityType, setEntityType] = useState('Startup / MSME');
  const [question, setQuestion] = useState(initialQuestion);
  const [ipType, setIpType] = useState<IPType>(initialIPType);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>(initialJurisdiction);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `IP-FAC-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setReferenceId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Escalate to IP Facilitator
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Connect with registered patent & trademark facilitators for legal prosecution
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-md transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              Escalation Request Logged
            </h4>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-xs text-slate-700 max-w-xs mx-auto">
              <span className="text-slate-500 block">Reference Request Docket</span>
              <span className="font-mono font-bold text-sm text-slate-900">{referenceId}</span>
            </div>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Your inquiry has been packaged with relevant statutory citations and queued for review. In a production environment, this forwards to registered patent attorneys and facilitators under DPIIT startup schemes.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-lg hover:bg-slate-800 transition-colors"
              >
                Return to Assistant
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 text-amber-900 text-xs">
              <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
              <div>
                <span className="font-semibold block mb-0.5">Facilitator Protocol</span>
                IP SAKTI delivers informational assistance. For patent claim drafting, filing opposition, or court litigation, direct representation by a registered agent is legally required.
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Your Question or Matter Summary *
              </label>
              <textarea
                required
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Describe your specific IP issue or question..."
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Priya Sharma"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.in"
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Entity Category
                </label>
                <select
                  value={entityType}
                  onChange={(e) => setEntityType(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900 bg-white"
                >
                  <option value="Student / Academic">Student / Academic</option>
                  <option value="Individual Inventor">Individual Inventor</option>
                  <option value="Startup / MSME">Startup / MSME</option>
                  <option value="Enterprise R&D">Enterprise R&D</option>
                  <option value="Traditional Collective">Traditional Collective</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  IP Domain
                </label>
                <select
                  value={ipType}
                  onChange={(e) => setIpType(e.target.value as IPType)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900 bg-white capitalize"
                >
                  <option value="patent">Patent</option>
                  <option value="trademark">Trademark</option>
                  <option value="copyright">Copyright</option>
                  <option value="geographical_indication">Geographical Indication</option>
                  <option value="traditional_knowledge">Traditional Knowledge</option>
                  <option value="abs">ABS / Biodiversity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jurisdiction
                </label>
                <select
                  value={jurisdiction}
                  onChange={(e) => setJurisdiction(e.target.value as Jurisdiction)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900 bg-white"
                >
                  <option value="india">India 🇮🇳</option>
                  <option value="international">International 🌍</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Specific Deadlines or Examination Stage (Optional)
              </label>
              <input
                type="text"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="e.g. FER issued on 15th, Section 3(k) objection, Form 3 deadline"
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500 focus:outline-none text-slate-900"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Escalation</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
