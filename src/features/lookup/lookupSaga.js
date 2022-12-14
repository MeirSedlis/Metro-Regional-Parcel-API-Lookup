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
            type: 'SET_RESULTS',
            payload: response.data.features
        })
    } catch(error){
        console.log('Could not fetch property information. Reason:', error)
    }
}


// This is a very finicky endpoint. Many searches will fail.
function* fetchByAddress(action){
    const aNumber = Number(action.payload.aNumber);
    const street = action.payload.street;
    console.log('aNumber:', aNumber);
    console.log('street:', street);
    console.log(action.payload)
    try{
        const response = yield axios({
            method: 'GET',
            baseURL: `https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=ST_NAME+%3D+%27${street}%27+AND+ANUMBER+%3D+%27${aNumber}%27&outFields=*&f=pjson`,
        })
        yield put ({
            type: 'SET_RESULTS',
            payload: response.data.features
        })
    } catch(error){
        console.log('Could not fetch property information. Reason:', error)
    }
}

export default function* lookupSaga(){
    yield takeLatest('FETCH_BY_COUNTY_PIN', fetchByCountyPin)
    yield takeLatest('FETCH_BY_ADDRESS', fetchByAddress)
}