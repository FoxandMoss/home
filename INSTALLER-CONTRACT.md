# Fox & Moss Windows Installer Contract

This contract applies to every Fox & Moss Windows desktop installer unless a project explicitly documents a stronger requirement.

## Public download URL
- Website download buttons must use a versionless GitHub Releases URL such as `/releases/latest/download/<App>-Windows-Installer.exe`, never a version-pinned URL and never a raw Git/LFS repository file.
- The public button URL should remain stable across normal releases.
- Release automation replaces the stable-named asset behind that URL with the newest verified installer.

## Before installation
- A fresh/manual installer must check the app's public release channel before replacing any application files.
- If a newer published installer exists, download it, verify its published SHA-256 digest when GitHub provides one, open the newer installer, and stop the older installer.
- If the release service cannot be reached, the installer may continue with the already downloaded version and must not pretend the check succeeded.
- If a newer release is known but the replacement installer is missing, incomplete, or fails integrity verification, stop before installation.
- Passive/in-app updates skip this handoff check and preserve the existing install location.

## Install-location choice
- Fresh/manual installs must show eligible local drives as radio buttons or an equivalent single-choice control before files are installed.
- Do not silently default straight to C: when another eligible drive exists.
- Show drive label, detected storage type, and free space when available.
- Exclude optical/read-only targets, cloud-mounted/virtual drives, and unwritable targets.
- Mark one option **Recommended**.
- The recommendation is based on detected storage hardware and available space: prefer fixed NVMe, then fixed SSD, then fixed HDD, then removable storage; use free space as the tie-breaker.
- The UI must say that the recommendation is based on the computer's detected storage hardware and available space. It is a recommendation, not a forced choice.
- Existing installations and passive updates keep their current valid install drive by default rather than relocating the app unexpectedly.

## Safety
- Installation/update work must not delete user projects, documents, artwork, settings, or unrelated application data.
- Cleanup may remove only app-owned stale installer/runtime registrations or processes that the project's cleanup rules explicitly identify.
