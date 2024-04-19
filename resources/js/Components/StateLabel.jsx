import ColorLabel from "./ColorLabel";

export default function StateLabel({state}) {
    const color = {
        activo: "bg-emerald-400",
        "en revision": "bg-amber-400",
        inactivo: "bg-rose-400",
        bloqueado: "bg-rose-400",
    }

    return (
      <ColorLabel color={color[state] || "sr-only"}>
        {state || 'nothing'}  
      </ColorLabel>
    
    )
  }