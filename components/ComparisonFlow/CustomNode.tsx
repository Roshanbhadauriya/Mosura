"use client";

import React from "react";
import { Handle, Position } from "@xyflow/react";
import { Bot, Zap, Globe } from "lucide-react";
import Image from "next/image";
import mosuraLogo from "@/assets/logo.svg";

/* ─── Invisible handle style ─── */
const HANDLE_HIDDEN = "!opacity-0 !w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent";

/* ─────────────────────────────────────────────────
   1. CircleNode  –  Icon only (bot or mosura logo)
      Handles: top / bottom / left / right  (both source & target)
   ───────────────────────────────────────────────── */
export const CircleNode = ({ data }: any) => {
  const isLg = data.size === "lg";
  const isSm = data.size === "sm";
  const dim = isLg ? "h-[72px] w-[72px]" : isSm ? "h-10 w-10" : "h-14 w-14";
  const isMosura = data.isMosura || data.isZeroteq || data.icon === "mosura" || data.icon === "zeroteq";
  const borderColor = isMosura
    ? "border-[#ed7f18]/50"
    : data.color
      ? `border-[${data.color}]/30`
      : "border-white/15";

  return (
    <div className="relative group flex items-center justify-center">
      {/* Glow */}
      {!isSm && (
        <div
          className="absolute inset-[-8px] rounded-full blur-2xl opacity-15 group-hover:opacity-40 transition-opacity duration-500"
          style={{ backgroundColor: isMosura ? "#ed7f18" : (data.color || "#888") }}
        />
      )}

      <div
        className={`relative flex items-center justify-center rounded-full bg-[#111113] border-[1.5px] ${dim} transition-all duration-300 ${borderColor}`}
      >
        {/* ── 8 handles: 4 source + 4 target ── */}
        <Handle id="top-target"    type="target" position={Position.Top}    className={HANDLE_HIDDEN} />
        <Handle id="bottom-target" type="target" position={Position.Bottom} className={HANDLE_HIDDEN} />
        <Handle id="left-target"   type="target" position={Position.Left}   className={HANDLE_HIDDEN} />
        <Handle id="right-target"  type="target" position={Position.Right}  className={HANDLE_HIDDEN} />
        <Handle id="top-source"    type="source" position={Position.Top}    className={HANDLE_HIDDEN} />
        <Handle id="bottom-source" type="source" position={Position.Bottom} className={HANDLE_HIDDEN} />
        <Handle id="left-source"   type="source" position={Position.Left}   className={HANDLE_HIDDEN} />
        <Handle id="right-source"  type="source" position={Position.Right}  className={HANDLE_HIDDEN} />

        {isMosura ? (
          <Image
            src={mosuraLogo}
            alt="Mosura"
            width={isLg ? 38 : isSm ? 16 : 26}
            height={isLg ? 38 : isSm ? 16 : 26}
            className="brightness-150"
          />
        ) : data.icon === "bot" ? (
          <Bot size={isLg ? 34 : isSm ? 16 : 24} className="text-white/50" />
        ) : (
          <Zap size={isLg ? 34 : isSm ? 16 : 24} className="text-white/50" />
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   2. CircleLabelNode  –  Circle + label above/below
   ───────────────────────────────────────────────── */
export const CircleLabelNode = ({ data }: any) => {
  return (
    <div className="flex flex-col items-center gap-2">
      {data.label && (
        <span className="text-[10px] font-semibold text-white/45tracking-[0.15em] whitespace-nowrap">
          {data.label}
        </span>
      )}
      <CircleNode data={data} />
    </div>
  );
};

/* ─────────────────────────────────────────────────
   3. PlatformNode  –  Clean text-only rectangle
      No icon. Just label text with a subtle colored border.
      Handles: all 4 sides  (both source & target)
   ───────────────────────────────────────────────── */
export const PlatformNode = ({ data }: any) => {
  const color = data.color || "#888";

  return (
    <div className="relative group">
      <div
        className="relative flex items-center justify-center px-5 py-2.5 rounded-lg border bg-[#111113]/95 backdrop-blur-sm transition-all duration-300 min-w-[120px]"
        style={{ borderColor: `${color}40` }}
      >
        {/* ── 8 handles ── */}
        <Handle id="top-target"    type="target" position={Position.Top}    className={HANDLE_HIDDEN} />
        <Handle id="bottom-target" type="target" position={Position.Bottom} className={HANDLE_HIDDEN} />
        <Handle id="left-target"   type="target" position={Position.Left}   className={HANDLE_HIDDEN} />
        <Handle id="right-target"  type="target" position={Position.Right}  className={HANDLE_HIDDEN} />
        <Handle id="top-source"    type="source" position={Position.Top}    className={HANDLE_HIDDEN} />
        <Handle id="bottom-source" type="source" position={Position.Bottom} className={HANDLE_HIDDEN} />
        <Handle id="left-source"   type="source" position={Position.Left}   className={HANDLE_HIDDEN} />
        <Handle id="right-source"  type="source" position={Position.Right}  className={HANDLE_HIDDEN} />

        <span className="text-[12px] font-medium text-white/70 whitespace-nowrap">{data.label}</span>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   4. TargetNode  –  Small endpoint rectangle (API / Event / LLMs)
   ───────────────────────────────────────────────── */
export const TargetNode = ({ data }: any) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#111113] border border-white/8 min-w-[80px] justify-center">
      <Handle id="left-target"   type="target" position={Position.Left}   className={HANDLE_HIDDEN} />
      <Handle id="top-target"    type="target" position={Position.Top}    className={HANDLE_HIDDEN} />
      <Handle id="right-target"  type="target" position={Position.Right}  className={HANDLE_HIDDEN} />
      <Handle id="bottom-target" type="target" position={Position.Bottom} className={HANDLE_HIDDEN} />
      <Handle id="left-source"   type="source" position={Position.Left}   className={HANDLE_HIDDEN} />
      <Handle id="right-source"  type="source" position={Position.Right}  className={HANDLE_HIDDEN} />
      <Handle id="top-source"    type="source" position={Position.Top}    className={HANDLE_HIDDEN} />
      <Handle id="bottom-source" type="source" position={Position.Bottom} className={HANDLE_HIDDEN} />
      <span className="text-[11px] font-medium text-white/55 whitespace-nowrap">{data.label}</span>
    </div>
  );
};

/* ─────────────────────────────────────────────────
   5. GhostNode  –  Faded small circle for background depth
   ───────────────────────────────────────────────── */
export const GhostNode = ({ data }: any) => {
  return (
    <div className="opacity-25">
      <CircleNode data={{ ...data, size: "sm", icon: "bot" }} />
    </div>
  );
};

export const nodeTypes = {
  circle: CircleNode,
  circleLabel: CircleLabelNode,
  platform: PlatformNode,
  target: TargetNode,
  ghost: GhostNode,
};
