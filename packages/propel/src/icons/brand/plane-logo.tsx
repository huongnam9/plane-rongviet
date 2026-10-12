/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

import type { ISvgIcons } from "../type";
import { RONGVIET_SHIELD_VIEWBOX, RongVietShieldPaths } from "./rongviet-shield";

// RongViet branding: the Plane mark is replaced by the RongViet shield (multi-colour, ignores `color`).
export function PlaneLogo({ width = "32", height = "52", className }: ISvgIcons) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={RONGVIET_SHIELD_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Rồng Việt"
    >
      <RongVietShieldPaths />
    </svg>
  );
}
