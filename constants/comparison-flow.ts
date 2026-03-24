import { Edge, Node } from "@xyflow/react";

/* ─── Color constants ─── */
export const FLOW_COLORS = {
  without: {
    edge: "#26EBA1",
    button: "text-[#26EBA1] bg-[#26EBA1]/10 border-[#26EBA1]/20 shadow-[inset_0_0_15px_rgba(34,197,94,0.1)]",
    nodeBorder: "border-[#26EBA1]/20",
  },
  with: {
    edge: "#ed7f18",
    button: "text-[#ed7f18] bg-[#ed7f18]/10 border-[#ed7f18]/20 shadow-[inset_0_0_15px_rgba(237,127,24,0.1)]",
    nodeBorder: "border-[#ed7f18]/30",
  },
};

/* ─── Helper to create a styled edge ─── */
const e = (
  id: string,
  source: string,
  target: string,
  color: string,
  opts?: {
    sw?: number;
    op?: number;
    sh?: string;
    th?: string;
  }
): Edge => ({
  id,
  source,
  target,
  type: "default",
  sourceHandle: opts?.sh || "right-source",
  targetHandle: opts?.th || "left-target",
  style: {
    stroke: color,
    strokeWidth: opts?.sw ?? 1.5,
    opacity: opts?.op ?? 0.7,
  },
});

/* ─── Shared ghost nodes (background depth) ─── */
const GHOST_NODES: Node[] = [
  { id: "g1", type: "ghost", position: { x: 10, y: 60 }, data: {} },
  { id: "g2", type: "ghost", position: { x: 55, y: 110 }, data: {} },
  { id: "g3", type: "ghost", position: { x: 10, y: 160 }, data: {} },
  { id: "g4", type: "ghost", position: { x: 55, y: 210 }, data: {} },
  { id: "g5", type: "ghost", position: { x: 10, y: 260 }, data: {} },
  { id: "g6", type: "ghost", position: { x: 55, y: 310 }, data: {} },
];

/* ─── Small agent circles on the left ─── */
const AGENT_NODES: Node[] = [
  { id: "a1", type: "circle", position: { x: 120, y: 90 }, data: { icon: "bot", size: "sm" } },
  { id: "a2", type: "circle", position: { x: 120, y: 180 }, data: { icon: "bot", size: "sm" } },
  { id: "a3", type: "circle", position: { x: 120, y: 320 }, data: { icon: "bot", size: "sm" } },
];

/* ─── Target nodes on the far right ─── */
const TARGET_NODES: Node[] = [
  { id: "t-api-1",   type: "target", position: { x: 920, y: 20 },  data: { label: "API" } },
  { id: "t-api-2",   type: "target", position: { x: 920, y: 60 },  data: { label: "API" } },
  { id: "t-api-3",   type: "target", position: { x: 920, y: 100 }, data: { label: "API" } },
  { id: "t-event-1", type: "target", position: { x: 920, y: 160 }, data: { label: "Event" } },
  { id: "t-event-2", type: "target", position: { x: 920, y: 200 }, data: { label: "Event" } },
  { id: "t-event-3", type: "target", position: { x: 920, y: 240 }, data: { label: "Event" } },
  { id: "t-api-4",   type: "target", position: { x: 920, y: 310 }, data: { label: "API" } },
  { id: "t-api-5",   type: "target", position: { x: 920, y: 350 }, data: { label: "API" } },
  { id: "t-api-6",   type: "target", position: { x: 920, y: 390 }, data: { label: "API" } },
];

/* ─── LLM target nodes at the bottom ─── */
const LLM_NODES: Node[] = [
  { id: "llm-1", type: "target", position: { x: 220, y: 480 }, data: { label: "LLMs" } },
  { id: "llm-2", type: "target", position: { x: 320, y: 480 }, data: { label: "LLMs" } },
  { id: "llm-3", type: "target", position: { x: 420, y: 480 }, data: { label: "LLMs" } },
];

/* ═══════════════════════════════════════════════════
   WITHOUT MOSURA  –  Fragmented architecture (green)
   ═══════════════════════════════════════════════════ */
const G = FLOW_COLORS.without.edge;

export const WITHOUT_MOSURA_DATA: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    ...GHOST_NODES,
    ...AGENT_NODES,

    // Center hub
    {
      id: "center",
      type: "circleLabel",
      position: { x: 230, y: 160 },
      data: { label: "AI apps / Agents", icon: "bot", size: "lg", color: G },
    },

    // MCP layer
    { id: "mcp-gw",  type: "platform", position: { x: 390, y: 180 },  data: { label: "MCP Gateway", color: G } },
    { id: "mcp-s1",  type: "platform", position: { x: 530, y: 115 },  data: { label: "MCP Server", color: G } },
    { id: "mcp-s2",  type: "platform", position: { x: 530, y: 175 },  data: { label: "MCP Server", color: G } },
    { id: "mcp-s3",  type: "platform", position: { x: 530, y: 235 },  data: { label: "MCP Server", color: G } },

    // Gateway layer
    { id: "gw-1",    type: "platform", position: { x: 710, y: 30 },   data: { label: "API Gateway 1", color: G } },
    { id: "gw-2",    type: "platform", position: { x: 710, y: 85 },   data: { label: "API Gateway 2", color: G } },
    { id: "gw-ev",   type: "platform", position: { x: 710, y: 155 },  data: { label: "Event Gateway", color: G } },
    { id: "gw-brk",  type: "platform", position: { x: 710, y: 210 },  data: { label: "Just a broker", color: G } },
    { id: "gw-3",    type: "platform", position: { x: 710, y: 295 },  data: { label: "API Gateway 3", color: G } },
    { id: "gw-4",    type: "platform", position: { x: 710, y: 350 },  data: { label: "API Gateway 4", color: G } },

    // Bottom sub-branch
    { id: "data-p",  type: "platform", position: { x: 270, y: 390 },  data: { label: "Data platform", color: G } },
    { id: "llm-gw",  type: "platform", position: { x: 390, y: 390 },  data: { label: "LLM Gateway", color: G } },

    ...LLM_NODES,
    ...TARGET_NODES,
  ],
  edges: [
    // Ghost → agents
    e("g1-a1", "g1", "a1", G, { sw: 0.8, op: 0.2, sh: "right-source", th: "left-target" }),
    e("g2-a1", "g2", "a1", G, { sw: 0.8, op: 0.2 }),
    e("g3-a2", "g3", "a2", G, { sw: 0.8, op: 0.2 }),
    e("g4-a2", "g4", "a2", G, { sw: 0.8, op: 0.2 }),
    e("g5-a3", "g5", "a3", G, { sw: 0.8, op: 0.2 }),
    e("g6-a3", "g6", "a3", G, { sw: 0.8, op: 0.2 }),

    // Agents → center
    e("a1-c", "a1", "center", G, { sw: 1.2, op: 0.5 }),
    e("a2-c", "a2", "center", G, { sw: 1.2, op: 0.5 }),
    e("a3-c", "a3", "center", G, { sw: 1.2, op: 0.5 }),

    // Center → MCP Gateway
    e("c-mcp", "center", "mcp-gw", G, { sw: 2.5 }),

    // MCP GW → Servers
    e("mcp-s1", "mcp-gw", "mcp-s1", G, { sw: 1.5 }),
    e("mcp-s2", "mcp-gw", "mcp-s2", G, { sw: 1.5 }),
    e("mcp-s3", "mcp-gw", "mcp-s3", G, { sw: 1.5 }),

    // Servers → Gateways
    e("s1-g1",  "mcp-s1", "gw-1",   G),
    e("s1-g2",  "mcp-s1", "gw-2",   G),
    e("s2-gev", "mcp-s2", "gw-ev",  G),
    e("s2-gbk", "mcp-s2", "gw-brk", G),
    e("s3-g3",  "mcp-s3", "gw-3",   G),
    e("s3-g4",  "mcp-s3", "gw-4",   G),

    // Gateways → Targets
    e("g1-t1",  "gw-1",   "t-api-1",   G),
    e("g1-t2",  "gw-1",   "t-api-2",   G),
    e("g2-t3",  "gw-2",   "t-api-3",   G),
    e("gev-t4", "gw-ev",  "t-event-1", G),
    e("gev-t5", "gw-ev",  "t-event-2", G),
    e("gbk-t6", "gw-brk", "t-event-3", G),
    e("g3-t7",  "gw-3",   "t-api-4",   G),
    e("g3-t8",  "gw-3",   "t-api-5",   G),
    e("g4-t9",  "gw-4",   "t-api-6",   G),

    // Center → bottom sub-branch
    e("c-dp",  "center", "data-p", G, { sw: 2, sh: "bottom-source", th: "top-target" }),
    e("c-llm", "center", "llm-gw", G, { sw: 2, sh: "bottom-source", th: "top-target" }),

    // Data platform / LLM GW → LLMs
    e("dp-l1",  "data-p", "llm-1", G, { sh: "bottom-source", th: "top-target" }),
    e("dp-l2",  "data-p", "llm-2", G, { sh: "bottom-source", th: "top-target" }),
    e("lg-l3",  "llm-gw", "llm-3", G, { sh: "bottom-source", th: "top-target" }),
  ],
};

/* ═══════════════════════════════════════════════════
   WITH MOSURA  –  Unified engine (orange)
   Replaces gateway rectangles with Mosura logo circles
   ═══════════════════════════════════════════════════ */
const O = FLOW_COLORS.with.edge;

export const WITH_MOSURA_DATA: { nodes: Node[]; edges: Edge[] } = {
  nodes: [
    ...GHOST_NODES,
    ...AGENT_NODES,

    // Left Mosura relay circle
    { id: "relay-l", type: "circle", position: { x: 190, y: 145 }, data: { isMosura: true } },

    // Center hub
    {
      id: "center",
      type: "circleLabel",
      position: { x: 290, y: 138 },
      data: { label: "AI apps / Agents", icon: "bot", size: "lg", color: O },
    },

    // Right Mosura relay circle
    { id: "relay-r", type: "circle", position: { x: 420, y: 165 }, data: { isMosura: true } },

    // MCP Servers (text-only)
    { id: "mcp-s1", type: "platform", position: { x: 530, y: 115 }, data: { label: "MCP Server", color: O } },
    { id: "mcp-s2", type: "platform", position: { x: 530, y: 175 }, data: { label: "MCP Server", color: O } },
    { id: "mcp-s3", type: "platform", position: { x: 530, y: 235 }, data: { label: "MCP Server", color: O } },

    // Mosura circles replacing gateways
    { id: "ztq-1", type: "circle", position: { x: 720, y: 45 },  data: { isMosura: true, size: "lg" } },
    { id: "ztq-2", type: "circle", position: { x: 720, y: 170 }, data: { isMosura: true, size: "lg" } },
    { id: "ztq-3", type: "circle", position: { x: 720, y: 300 }, data: { isMosura: true, size: "lg" } },

    // Bottom Mosura circle
    { id: "ztq-btm", type: "circle", position: { x: 310, y: 360 }, data: { isMosura: true } },

    ...LLM_NODES,
    ...TARGET_NODES,
  ],
  edges: [
    // Ghost → agents
    e("g1-a1", "g1", "a1", O, { sw: 0.8, op: 0.2 }),
    e("g2-a1", "g2", "a1", O, { sw: 0.8, op: 0.2 }),
    e("g3-a2", "g3", "a2", O, { sw: 0.8, op: 0.2 }),
    e("g4-a2", "g4", "a2", O, { sw: 0.8, op: 0.2 }),
    e("g5-a3", "g5", "a3", O, { sw: 0.8, op: 0.2 }),
    e("g6-a3", "g6", "a3", O, { sw: 0.8, op: 0.2 }),

    // Agents → left relay
    e("a1-rl", "a1", "relay-l", O, { sw: 1.2, op: 0.6 }),
    e("a2-rl", "a2", "relay-l", O, { sw: 1.2, op: 0.6 }),
    e("a3-rl", "a3", "relay-l", O, { sw: 1.2, op: 0.6 }),

    // Left relay → center
    e("rl-c", "relay-l", "center", O, { sw: 2.5 }),

    // Center → right relay
    e("c-rr", "center", "relay-r", O, { sw: 2.5 }),

    // Right relay → MCP Servers
    e("rr-s1", "relay-r", "mcp-s1", O, { sw: 1.5 }),
    e("rr-s2", "relay-r", "mcp-s2", O, { sw: 1.5 }),
    e("rr-s3", "relay-r", "mcp-s3", O, { sw: 1.5 }),

    // MCP Servers → Mosura circles
    e("s1-z1", "mcp-s1", "ztq-1", O, { sw: 1.5 }),
    e("s2-z2", "mcp-s2", "ztq-2", O, { sw: 1.5 }),
    e("s3-z3", "mcp-s3", "ztq-3", O, { sw: 1.5 }),

    // Mosura circles → Targets
    e("z1-t1", "ztq-1", "t-api-1",   O),
    e("z1-t2", "ztq-1", "t-api-2",   O),
    e("z1-t3", "ztq-1", "t-api-3",   O),
    e("z2-t4", "ztq-2", "t-event-1", O),
    e("z2-t5", "ztq-2", "t-event-2", O),
    e("z2-t6", "ztq-2", "t-event-3", O),
    e("z3-t7", "ztq-3", "t-api-4",   O),
    e("z3-t8", "ztq-3", "t-api-5",   O),
    e("z3-t9", "ztq-3", "t-api-6",   O),

    // Center → bottom Mosura circle
    e("c-zb", "center", "ztq-btm", O, { sw: 2, sh: "bottom-source", th: "top-target" }),

    // Bottom Mosura → LLMs
    e("zb-l1", "ztq-btm", "llm-1", O, { sh: "bottom-source", th: "top-target" }),
    e("zb-l2", "ztq-btm", "llm-2", O, { sh: "bottom-source", th: "top-target" }),
    e("zb-l3", "ztq-btm", "llm-3", O, { sh: "bottom-source", th: "top-target" }),
  ],
};
