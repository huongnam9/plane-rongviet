/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import { RongVietShield } from "@plane/propel/icons";

// RongViet branding: pulsing RongViet shield instead of the Plane loading GIFs.
export function LogoSpinner() {
  return (
    <div className="flex items-center justify-center" role="status" aria-label="Đang tải">
      <RongVietShield className="h-8 w-auto animate-pulse sm:h-14" />
    </div>
  );
}
