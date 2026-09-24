"use client";
import { useState } from "react";
export default function RecordSleeve(){
 const [open,setOpen]=useState(false);
 return <button type="button" className={`label-artwork ${open?'is-open':''}`} aria-label={open?'Guardar el vinilo en su funda':'Sacar el vinilo de su funda'} aria-pressed={open} onClick={()=>setOpen(!open)}><span className="record-disc" aria-hidden="true"><span><img src="/logo-black.png" alt="" width="140" height="140"/></span></span><span className="record-sleeve" aria-hidden="true"><img src="/logo-white.png" alt="" width="340" height="340"/></span></button>;
}
