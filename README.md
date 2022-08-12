# Metro Regional Parcel Lookup

How to use: Use this tool to look up information about a property using either the County PIN (property identification number) or the street name and number. 

## Metro Regional Parcel API

API Base URL: https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0

API Metadata: https://resources.gisdata.mn.gov/pub/gdrs/data/pub/us_mn_state_metrogis/plan_regional_parcels/metadata/metadata.html

Base API endpoint (there is a GUI you can test queries with): https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query

API Technical Documentation: https://arcgis.metc.state.mn.us/server/sdk/rest/index.html#/Query_Feature_Service_Layer/02ss0000002r000000/

Sample query (where the street number is 1104 and the county is Hennepin): https://arcgis.metc.state.mn.us/server/rest/services/GISLibrary/VWParcelsPoints/FeatureServer/0/query?where=ANUMBER%3D1104+AND+CO_NAME%3D%27Hennepin%27&outFields=*&returnGeometry=false&f=pjson

Sample property identification number (for testing):

1202924330056
323123440017
112823320034