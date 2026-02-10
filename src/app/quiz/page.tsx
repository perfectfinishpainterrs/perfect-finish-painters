"use client";

import { useState, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

type QuizStep = {
  id: string;
  question: string;
  type: "single" | "multiple" | "text" | "contact" | "upload";
  options?: { value: string; label: string; icon?: string }[];
};

const allSteps: Record<string, QuizStep> = {
  projectType: {
    id: "projectType",
    question: "What type of project do you need?",
    type: "multiple",
    options: [
      { value: "interior", label: "Interior Painting" },
      { value: "exterior", label: "Exterior Painting" },
      { value: "deck", label: "Deck / Fence Staining" },
      { value: "drywall", label: "Drywall Repair" },
      { value: "flooring", label: "Flooring" },
      { value: "other", label: "Other" },
    ],
  },
  propertyType: {
    id: "propertyType",
    question: "What type of property is this?",
    type: "single",
    options: [
      { value: "house", label: "House" },
      { value: "apartment", label: "Apartment / Condo" },
      { value: "townhouse", label: "Townhouse" },
      { value: "commercial", label: "Commercial" },
    ],
  },
  rooms: {
    id: "rooms",
    question: "How many rooms need work?",
    type: "single",
    options: [
      { value: "1", label: "1 room" },
      { value: "2-3", label: "2-3 rooms" },
      { value: "4-5", label: "4-5 rooms" },
      { value: "6+", label: "6+ rooms / Whole house" },
    ],
  },
  exteriorAreas: {
    id: "exteriorAreas",
    question: "What exterior areas need work?",
    type: "multiple",
    options: [
      { value: "siding", label: "Siding" },
      { value: "trim", label: "Trim" },
      { value: "shutters", label: "Shutters" },
      { value: "doors", label: "Doors" },
      { value: "deck", label: "Deck" },
      { value: "fence", label: "Fence" },
      { value: "garage", label: "Garage" },
    ],
  },
  condition: {
    id: "condition",
    question: "What's the current condition?",
    type: "single",
    options: [
      { value: "good", label: "Good - Just needs fresh paint" },
      { value: "fair", label: "Fair - Minor repairs needed" },
      { value: "poor", label: "Poor - Significant prep work needed" },
      { value: "unsure", label: "Not sure - Need assessment" },
    ],
  },
  timeline: {
    id: "timeline",
    question: "When do you want to start?",
    type: "single",
    options: [
      { value: "asap", label: "As soon as possible" },
      { value: "2weeks", label: "Within 2 weeks" },
      { value: "month", label: "Within a month" },
      { value: "flexible", label: "Flexible / Just getting quotes" },
    ],
  },
  photos: {
    id: "photos",
    question: "Got any photos of the area?",
    type: "upload",
  },
  contact: {
    id: "contact",
    question: "Great! Where should we send your estimate?",
    type: "contact",
  },
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Compute active steps based on project type selection
  const activeSteps = useMemo(() => {
    const projectTypes = (answers.projectType as string[]) || [];
    const hasInterior = projectTypes.some((t) => t !== "exterior");
    const hasExterior = projectTypes.includes("exterior");
    const onlyExterior = projectTypes.length > 0 && projectTypes.every((t) => t === "exterior");

    const steps: QuizStep[] = [allSteps.projectType, allSteps.propertyType];

    // Show rooms if interior-type work selected (or nothing selected yet - default)
    if (!onlyExterior) {
      steps.push(allSteps.rooms);
    }
    // Show exterior areas if exterior is selected
    if (hasExterior) {
      steps.push(allSteps.exteriorAreas);
    }

    steps.push(allSteps.condition, allSteps.timeline, allSteps.photos, allSteps.contact);
    return steps;
  }, [answers.projectType]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedFiles((prev) => [...prev, ...files]);
      const newUrls = files.map((file) => URL.createObjectURL(file));
      setPreviewUrls((prev) => [...prev, ...newUrls]);
    }
  };

  const removeFile = (index: number) => {
    URL.revokeObjectURL(previewUrls[index]);
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const currentQuestion = activeSteps[currentStep];
  const progress = ((currentStep + 1) / activeSteps.length) * 100;

  const handleSingleSelect = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
    if (currentStep < activeSteps.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleMultipleSelect = (value: string) => {
    const current = (answers[currentQuestion.id] as string[]) || [];
    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];
    setAnswers({ ...answers, [currentQuestion.id]: updated });
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < activeSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const projectTypes = (answers.projectType as string[])?.join(", ") || "Not specified";
    const propertyType = (answers.propertyType as string) || "Not specified";
    const rooms = (answers.rooms as string) || "";
    const exteriorAreas = (answers.exteriorAreas as string[])?.join(", ") || "";
    const condition = (answers.condition as string) || "Not specified";
    const timeline = (answers.timeline as string) || "Not specified";

    const formData = {
      name: contactInfo.name,
      phone: contactInfo.phone,
      email: contactInfo.email || "",
      address: contactInfo.address || "",
      projectTypes,
      propertyType,
      rooms,
      exteriorAreas,
      condition,
      timeline,
      notes: contactInfo.notes || "",
    };

    try {
      const response = await fetch(`${API_URL}/api/quiz-submission`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("There was an error submitting your request. Please try again or call us directly.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again or call us directly.");
    }

    setIsSubmitting(false);
  };

  const canProceed = () => {
    if (currentQuestion.type === "multiple") {
      const selected = answers[currentQuestion.id] as string[];
      return selected && selected.length > 0;
    }
    if (currentQuestion.type === "contact") {
      return contactInfo.name && contactInfo.phone;
    }
    if (currentQuestion.type === "upload") {
      return true; // Photos are optional
    }
    return !!answers[currentQuestion.id];
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#f1f5f9] flex">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/project-6.jpg"
            alt="Perfect Finish Painters work"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1e3a5f]/60" />
          <div className="absolute bottom-8 left-8 right-8">
            <Image
              src="/logo.png"
              alt="Perfect Finish Painters"
              width={200}
              height={60}
              className="h-16 w-auto mb-4"
            />
            <p className="text-white/80 text-lg">Perfect Job Every Time</p>
          </div>
        </div>

        {/* Right Side - Thank You */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-4">
          <div className="max-w-lg w-full text-center">
            <div className="w-20 h-20 bg-[#2563eb] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">Thank You!</h1>
            <p className="text-[#64748b] text-lg mb-8">
              We&apos;ve received your request. You&apos;ll hear from us within 24 hours with your personalized estimate.
            </p>
            <Link
              href="/"
              className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex">
      {/* Left Side - Image (Desktop Only) */}
      <div className="hidden lg:block lg:w-2/5 relative">
        <Image
          src="/project-1.jpg"
          alt="Perfect Finish Painters work"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/70" />
        <div className="absolute inset-0 flex flex-col justify-between p-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Perfect Finish Painters"
              width={220}
              height={70}
              className="h-16 w-auto"
            />
          </Link>
          <div>
            <h2 className="text-white text-3xl font-bold mb-4">Get Your Free Estimate</h2>
            <p className="text-white/80 text-lg mb-6">
              Answer a few quick questions and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-5 h-5 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <svg className="w-5 h-5 text-[#60a5fa]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Fast response</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Quiz */}
      <div className="w-full lg:w-3/5 flex flex-col">
        {/* Mobile Header */}
        <header className="lg:hidden bg-white border-b border-[#e2e8f0] px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="Perfect Finish Painters"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <Link href="/" className="text-[#64748b] hover:text-[#1e3a5f] text-sm">
              Exit
            </Link>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-end px-8 py-4">
          <Link href="/" className="text-[#64748b] hover:text-[#1e3a5f] text-sm">
            Exit Quiz
          </Link>
        </header>

        {/* Progress Bar */}
        <div className="bg-[#e2e8f0] h-1">
          <div
            className="bg-[#2563eb] h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Quiz Content */}
        <main className="flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-12 py-8">
          <div className="max-w-xl mx-auto w-full">
            {/* Step Counter */}
            <div className="text-center mb-6">
              <span className="text-[#64748b] text-sm">
                Question {currentStep + 1} of {activeSteps.length}
              </span>
            </div>

            {/* Question */}
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1e3a5f] text-center mb-8">
              {currentQuestion.question}
            </h1>

            {/* Options */}
            {currentQuestion.type === "single" && currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleSingleSelect(option.value)}
                    className={`w-full p-4 rounded-xl text-left transition-all ${
                      answers[currentQuestion.id] === option.value
                        ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25"
                        : "bg-white text-[#1e3a5f] hover:bg-[#e2e8f0] border border-[#e2e8f0]"
                    }`}
                  >
                    <span className="font-medium">{option.label}</span>
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === "multiple" && currentQuestion.options && (
              <div className="grid gap-3">
                {currentQuestion.options.map((option) => {
                  const selected = (answers[currentQuestion.id] as string[]) || [];
                  const isSelected = selected.includes(option.value);
                  return (
                    <button
                      key={option.value}
                      onClick={() => handleMultipleSelect(option.value)}
                      className={`w-full p-4 rounded-xl text-left transition-all flex items-center gap-3 ${
                        isSelected
                          ? "bg-[#2563eb] text-white shadow-lg shadow-blue-500/25"
                          : "bg-white text-[#1e3a5f] hover:bg-[#e2e8f0] border border-[#e2e8f0]"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          isSelected ? "border-white bg-white" : "border-[#cbd5e1]"
                        }`}
                      >
                        {isSelected && (
                          <svg className="w-3 h-3 text-[#2563eb]" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </button>
                  );
                })}
                <p className="text-[#64748b] text-sm text-center mt-2">
                  Select all that apply
                </p>
              </div>
            )}

            {currentQuestion.type === "upload" && (
              <div className="space-y-6">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-[#cbd5e1] hover:border-[#2563eb] bg-white rounded-2xl p-8 text-center cursor-pointer transition-colors"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <svg className="w-12 h-12 text-[#64748b] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-[#1e3a5f] font-medium mb-1">Click to upload photos</p>
                  <p className="text-[#64748b] text-sm">or drag and drop</p>
                </div>

                {previewUrls.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {previewUrls.map((url, index) => (
                      <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
                        <Image
                          src={url}
                          alt={`Upload ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 w-8 h-8 bg-[#1e3a5f]/60 hover:bg-[#1e3a5f]/80 rounded-full flex items-center justify-center text-white transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-[#64748b] text-sm text-center">
                  Photos help us give you a more accurate estimate (optional)
                </p>
              </div>
            )}

            {currentQuestion.type === "contact" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={contactInfo.name}
                    onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                    className="w-full bg-white text-[#1e3a5f] rounded-xl px-4 py-3 border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full bg-white text-[#1e3a5f] rounded-xl px-4 py-3 border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="(609) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full bg-white text-[#1e3a5f] rounded-xl px-4 py-3 border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-2">
                    Project Address
                  </label>
                  <input
                    type="text"
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                    className="w-full bg-white text-[#1e3a5f] rounded-xl px-4 py-3 border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none transition-colors"
                    placeholder="123 Main St, Mays Landing, NJ"
                  />
                </div>
                <div>
                  <label className="block text-[#1e3a5f] text-sm font-medium mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={contactInfo.notes}
                    onChange={(e) => setContactInfo({ ...contactInfo, notes: e.target.value })}
                    rows={3}
                    className="w-full bg-white text-[#1e3a5f] rounded-xl px-4 py-3 border border-[#e2e8f0] focus:border-[#2563eb] focus:outline-none transition-colors resize-none"
                    placeholder="Any specific details about your project..."
                  />
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Navigation */}
        <div className="bg-white border-t border-[#e2e8f0] px-4 sm:px-8 lg:px-12 py-4">
          <div className="max-w-xl mx-auto flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                currentStep === 0
                  ? "text-[#cbd5e1] cursor-not-allowed"
                  : "text-[#1e3a5f] hover:bg-[#f1f5f9]"
              }`}
            >
              Back
            </button>

            {(currentQuestion.type === "multiple" || currentQuestion.type === "upload") && (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className={`px-8 py-3 rounded-full font-medium transition-colors ${
                  canProceed()
                    ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/25"
                    : "bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed"
                }`}
              >
                {currentQuestion.type === "upload" && uploadedFiles.length === 0 ? "Skip" : "Next"}
              </button>
            )}

            {currentQuestion.type === "contact" && (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className={`px-8 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2 ${
                  canProceed() && !isSubmitting
                    ? "bg-[#2563eb] hover:bg-[#1d4ed8] text-white shadow-lg shadow-blue-500/25"
                    : "bg-[#e2e8f0] text-[#94a3b8] cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  "Get My Estimate"
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
