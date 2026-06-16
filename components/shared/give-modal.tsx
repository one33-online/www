"use client";

import { ArrowRight, Check, Copy, Share2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// The Zapper Code string encoded in the QR image. Wrapping it in a
// payWithZapper link opens the Zapper app on the payment screen on mobile,
// and falls back to zapper.com on desktop.
const ZAPPER_CODE =
  "http://2.zap.pe?t=6&i=72533:91641:7[34||3:10[38|One33,39|ZAR";
const ZAPPER_LINK = `https://www.zapper.com/payWithZapper?qr=${encodeURIComponent(
  ZAPPER_CODE
)}&appName=ONE33`;

const EFT_DETAILS = [
  { label: "Account Name", value: "Lead ONE33 NPC" },
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
  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const shareTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    if (copyTimerRef.current) {
      clearTimeout(copyTimerRef.current);
    }
    setCopiedLabel(label);
    copyTimerRef.current = setTimeout(() => setCopiedLabel(null), 2000);
  };

  const shareDetails = async () => {
    const isTouchDevice = navigator.maxTouchPoints > 1;
    if (navigator.share && isTouchDevice) {
      await navigator.share({
        title: "ONE33 Bank Details",
        text: `ONE33 — Direct Bank Transfer\n\n${SHARE_TEXT}`,
      });
    } else {
      await navigator.clipboard.writeText(
        `ONE33 — Direct Bank Transfer\n\n${SHARE_TEXT}`
      );
      if (shareTimerRef.current) {
        clearTimeout(shareTimerRef.current);
      }
      setShareConfirmed(true);
      shareTimerRef.current = setTimeout(() => setShareConfirmed(false), 2000);
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
          visit. ONE33 stays until trust is built and restoration is underway.
          That takes time. Your contribution makes it possible.
        </p>
        <span className="home-partner__card-action">
          Donate via Zapper or EFT <ArrowRight size={12} />
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
              <a
                className="give-modal__zapper"
                href={ZAPPER_LINK}
                rel="noopener"
                target="_blank"
              >
                <Image
                  alt="Scan to donate to ONE33 with the Zapper app"
                  className="give-modal__zapper-qr"
                  height={180}
                  src="/images/one33-zapper-qr-code.png"
                  width={180}
                />
                <span className="give-modal__zapper-cta">
                  Scan, or tap to open Zapper <ArrowRight size={12} />
                </span>
              </a>
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
