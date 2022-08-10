export function fetchByCountyPIN(PIN) {
  return async function fetchByCountyPINThunk(dispatch, getState, axios) {
    return axios({
      method: "GET",
      baseURL:
        "https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/",
      params: {
        where: `COUNTY_PIN=${PIN}`,
        outFields:
          "ANUMBERPRE,ANUMBER,ANUMBERSUF,ST_PRE_MOD,ST_PRE_DIR,ST_PRE_TYP,ST_PRE_SEP,ST_NAME,ST_POS_TYP,ST_POS_DIR,ZIP,CTU_NAME,CO_NAME,STATE_CODE,OWNER_NAME,EMV_TOTAL",
        f: "pjson",
      },
    }).then(({data})=> console.log(data))
    ;
  };
}
