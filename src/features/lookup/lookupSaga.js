import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchByCountyPin(action){
    const PIN = action.payload;
    try{
        const response = yield axios({
            method: 'GET',
            baseURL: `https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=COUNTY_PIN='${PIN}'&outFields=*&f=pjson`,
        })
        yield put ({
            type: 'lookup.setResults',
            payload: response.data.features
        })
    } catch(error){
        console.log('Could not fetch property information. Reason:', error)
    }
}

export default function* lookupSaga(){
    yield takeLatest('FETCH_BY_COUNTY_PIN', fetchByCountyPin)
}