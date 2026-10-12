/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

import type { ISvgIcons } from "../type";
import { RongVietShieldPaths } from "./rongviet-shield";

// RongViet branding: shield + "RỒNG VIỆT" wordmark. Keeps the original 253x53 box so every call site keeps its size.
// The shield keeps its brand colours; the wordmark follows `color` (currentColor by default) so it works in light and dark themes.
export function PlaneLockup({ width = "253", height = "53", className, color = "currentColor" }: ISvgIcons) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 253 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rồng Việt"
    >
      <g transform="scale(0.2928)">
        <RongVietShieldPaths />
      </g>
      <text
        x="44"
        y="41"
        fill={color}
        fontFamily="inherit"
        fontSize="36"
        fontWeight="800"
        textLength="205"
        lengthAdjust="spacingAndGlyphs"
      >
        RỒNG VIỆT
      </text>
    </svg>
  );
}
