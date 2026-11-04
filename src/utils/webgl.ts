// Some browsers (locked-down office PCs, VMs, WebGL switched off) cannot create a
// WebGL context. Without this check the 3D scene throws and the whole page goes blank.
export function canUseWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") || canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

// Shows the monogram fallback instead of the 3D character.
export function markNoWebGL(): void {
  document.body.classList.add("no-webgl");
}
