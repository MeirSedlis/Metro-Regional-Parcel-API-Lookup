import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Results() {
  const results = useSelector((store) => store.lookup);
  return (
    <div>
      <ul>
        {results &&
          results.map((property) => {
            const aNumberPre = property.attributes.ANUMBERPRE;
            const aNumber = property.attributes.ANUMBER;
            const aNumberSuf = property.attributes.ANUMBERSUF;
            const stPreMod = property.attributes.ST_PRE_MOD;
            const stPreDir = property.attributes.ST_PRE_DIR;
            const stPreTyp = property.attributes.ST_PRE_TYP;
            const stPreSep = property.attributes.ST_PRE_SEP;
            const streetName = property.attributes.ST_NAME;
            const streetType = property.attributes.ST_POS_TYP;
            const stPosDir = property.attributes.ST_POS_DIR;
            const stPosMod = property.attributes.ST_POS_MOD;
            const city = property.attributes.CTU_NAME;
            const stateCode = property.attributes.STATE_CODE;
            const zip = property.attributes.ZIP;
            const county = property.attributes.CO_NAME;
            const PIN = property.attributes.COUNTY_PIN;
            const totalValue = property.attributes.EMV_TOTAL;
            const owner = property.attributes.OWNER_NAME;
            return (
              <li key={PIN}>
                {aNumberPre && aNumberPre + " "}
                {aNumber + " "}
                {aNumberSuf && aNumberSuf + " "}
                {stPreMod && stPreMod + " "}
                {stPreDir && stPreDir + " "}
                {stPreTyp && stPreTyp + " "}
                {stPreSep && stPreSep + " "}
                {streetName + " "}
                {streetType + " "}
                {stPosDir && stPosDir + " "}
                {stPosMod && stPosMod} <br />
                {city},{" " + stateCode}
                {" " + zip} <br />
                <span className="indented">Owner: {owner}</span> <br />
                <span className="indented">
                  Estimated Property Value: ${totalValue}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
