"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const EFT_DETAILS = [
  { label: "Account Name", value: "Lead One33 NPC" },
  { label: "Account Number", value: "63141958299" },
  { label: "Branch Code", value: "220629" },
  { label: "Branch Name", value: "Umhlanga Crescent 501" },
  { label: "Swift Code", value: "FIRNZAJJ" },
] as const;

const SHARE_TEXT = EFT_DETAILS.map(
  ({ label, value }) => `${label}: ${value}`
).join("\n");

export default function GiveModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [shareConfirmed, setShareConfirmed] = useState(false);

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 2000);
  };

  const shareDetails = async () => {
    const isTouchDevice = navigator.maxTouchPoints > 1;
    if (navigator.share && isTouchDevice) {
      await navigator.share({
        title: "One33 Bank Details",
        text: `One33 — Direct Bank Transfer\n\n${SHARE_TEXT}`,
      });
    } else {
      await navigator.clipboard.writeText(
        `One33 — Direct Bank Transfer\n\n${SHARE_TEXT}`
      );
      setShareConfirmed(true);
      setTimeout(() => setShareConfirmed(false), 2000);
    }
  };

  return (
    <>
      <button
        className="home-partner__card"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <p className="home-partner__card-num">01 —</p>
        <h3 className="home-partner__card-title">Give Financially</h3>
        <p className="home-partner__card-body">
          Your giving funds ongoing presence in communities — not a once-off
          visit. One33 stays until trust is built and restoration is underway.
          That takes time. Your contribution makes it possible.
        </p>
        <span className="home-partner__card-action">
          Donate via Zapper or EFT
        </span>
      </button>

      <Dialog onOpenChange={setIsOpen} open={isOpen}>
        <DialogContent
          aria-describedby={undefined}
          className="give-modal"
          fullScreenOnMobile
        >
          <div className="give-modal__body">
            <DialogHeader>
              <DialogTitle className="give-modal__title">
                Give Financially
              </DialogTitle>
            </DialogHeader>

            <p className="give-modal__note">
              Section 18A tax certificates are available for South African
              donors.
            </p>

            <div className="give-modal__section">
              <p className="give-modal__section-label">Zapper</p>
              <div className="give-modal__zapper-slot">
                <p className="give-modal__zapper-placeholder">
                  Zapper QR code coming soon
                </p>
              </div>
            </div>

            <div className="give-modal__section">
              <p className="give-modal__section-label">Direct Bank Transfer</p>
              <dl className="give-modal__eft">
                {EFT_DETAILS.map(({ label, value }) => (
                  <div className="give-modal__eft-row" key={label}>
                    <dt className="give-modal__eft-label">{label}</dt>
                    <dd className="give-modal__eft-value">
                      {value}
                      <button
                        aria-label={`Copy ${label}`}
                        className="give-modal__eft-copy"
                        onClick={() => copyValue(label, value)}
                        type="button"
                      >
                        {copiedLabel === label ? (
                          <Check size={13} />
                        ) : (
                          <Copy size={13} />
                        )}
                      </button>
                    </dd>
                  </div>
                ))}
              </dl>
              <button
                className="give-modal__share"
                onClick={shareDetails}
                type="button"
              >
                {shareConfirmed ? (
                  <>
                    <Check size={14} />
                    Copied to clipboard
                  </>
                ) : (
                  <>
                    <Share2 size={14} />
                    Share bank details
                  </>
                )}
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
