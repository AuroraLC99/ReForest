/*! For license information please see 127df65f5eb21741289c77bb6933bff0.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[91133],{58892:(e,t,n)=>{n.d(t,{a:()=>a,b:()=>r,c:()=>i,d:()=>o});const o=(0,n(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),a=o.state,i=o.state,r=o.state},91133:(e,t,n)=>{n.r(t),n.d(t,{arcgis_new_item_pages_data_store_select:()=>c});var o=n(28384),a=n(41171),i=n(76134),r=n(58892),s=n(54871),l=n(16665);n(66716),n(62381),n(27010);const c=class{constructor(e){(0,o.r)(this,e),this.newItemUpdatePage=(0,o.c)(this,"newItemUpdatePage",7),this.options={folder:{page:"dataStoreSelectFolder",enabled:!0},database:{page:"dataStoreSelectDatabaseType",enabled:!0},cloud:{page:"dataStoreSelectCloud",enabled:!0},bdfs:{page:"dataStoreSelectBdfs",enabled:!1}},this.cloudOptions=["amazon","azure"],this.databaseOptions=["bigQuery","snowflake"],this.selected="folder",this.pipelineCloudSelection="amazon",this.pipelineDatabaseSelection="bigQuery",this.serverList=[]}async componentWillLoad(){const e=i.c.portal,t=e.portalUser;r.a.newItemMode="dataStore",this.i18n=s.u.i18n.dataStoreSelect,this.isPortal=i.c.portal.isPortal,this.isPortal?this.selected="folder":(this.selected="database",r.a.typeKeywords=["Data Store connection"]),this.tileStrings=s.u.i18n.dataStoreSelectDatabase.pipelineProviders,this.serverList=await(0,a.l)(t,e),this.filterServers()}filterServers(){if(!i.c.portal.isPortal)return this.options.folder.enabled=!1,this.options.database.enabled=!0,this.options.cloud.enabled=!0,void(this.options.bdfs.enabled=!1);const e=this.serverList.filter((function(e){return"HOSTING_SERVER"===e.serverRole.toUpperCase()}));e.length&&(r.a.hostingServer=e[0]);const t=this.serverList.filter((function(e){return e.serverFunction.toUpperCase().indexOf("GEOANALYTICS")>-1})),n=i.c.config.bdfsEnabled;this.options.bdfs.enabled=!!(null==t?void 0:t.length)&&n;const o=this.serverList.filter((function(e){return e.serverFunction.toUpperCase().indexOf("KNOWLEDGE")>-1})),a=i.c.config.noSQLEnabled;r.a.noSqlEnabled=!!(null==o?void 0:o.length)&&a&&!(0,l.i)()}handleNext(){let e;const t=this.selected;r.a.addDataStoreType=t,r.a.dataStoreSelectServerList=this.serverList,r.a.type="Data Store",this.isPortal?e=this.options[t].page:(r.a.newItemMode="dataStore","cloud"===this.selected?(r.a.addDataStoreType="cloud",r.a.provider=this.pipelineCloudSelection,e="dataStoreSelectCloudCredentials"):(r.a.addDataStoreType="database",r.a.databaseProvider=this.pipelineDatabaseSelection,e="dataStoreDatabaseCredentials")),this.newItemUpdatePage.emit(e)}render(){const{i18n:e,options:t,cloudOptions:n,databaseOptions:a,tileStrings:i}=this;let s="cloud"===this.selected?n:a;return(0,o.h)("div",null,(0,o.h)("arcgis-new-item-description",{header:e.heading}),(0,o.h)("calcite-tile-select-group",{layout:"vertical",class:"tile-select-group"},Object.keys(t).map((n=>{let a;return a=this.isPortal?r.a.noSqlEnabled?e.options.database.descriptionNoSql:e.options.database.description:e.databaseDescriptionForOnline,t[n].enabled&&(0,o.h)("calcite-tile-select",{key:n,class:"tile-select",checked:this.selected===n,heading:e.options[n].title,description:"database"===n?a:e.options[n].description,name:"data-store-selection","input-enabled":!0,width:"full",type:"radio",value:n,onCalciteTileSelectChange:e=>{this.selected=e.target.value}})}))),!this.isPortal&&(0,o.h)("div",{class:"dynamic-select"},(0,o.h)("arcgis-new-item-description",{class:"dynamic-header",header:"cloud"===this.selected?e.subOptionsCloudDescription:e.subOptionsDatabaseDescription}),(0,o.h)("calcite-tile-select-group",{layout:"vertical"},s.map((e=>(0,o.h)("calcite-tile-select",{key:e,"input-enabled":!0,checked:s[0]===e,width:"full",type:"radio",value:e,heading:i[e].title,description:i[e].description,onCalciteTileSelectChange:e=>{"cloud"===this.selected?this.pipelineCloudSelection=e.target.value:this.pipelineDatabaseSelection=e.target.value}}))))))}};c.style=".tile-select-group{margin-top:1.25rem}.tile-select{margin-bottom:0.125rem}.dynamic-header{display:block;margin-bottom:1.5rem;margin-top:1.5rem}"},76134:(e,t,n)=>{n.d(t,{c:()=>a,o:()=>i});const o=(0,n(27010).c)({portal:null,user:null,api:4,scale:"m"}),a=o.state,i=o.onChange},16665:(e,t,n)=>{n.d(t,{a:()=>p,b:()=>h,c:()=>u,d:()=>d,e:()=>i,f:()=>r,g:()=>v,h:()=>c,i:()=>m,j:()=>f,k:()=>w,l:()=>s,m:()=>l});var o=n(41171),a=n(76134);function i(e,t){const n={type:"folder",path:`/fileShares/${t}`,info:{datastoreConnectionType:"shared",path:e.publisherFolderPath,hostName:e.publisherFolderPathHostname}};return e.allowServicesRestart&&(n.allowServicesRestart=!0,n.options=JSON.stringify({allowServicesRestart:!0})),"newPath"===e.serverFolderPath?(n.clientPath=e.publisherFolderPath,n.info.path=e.newServerFolderPath,n.info.datastoreConnectionType="replicated"):"nfsHostAndPath"===e.serverFolderPath&&(n.clientPath=e.publisherFolderPath,n.provider="UserManaged",n.info.datastoreConnectionType="replicated",n.info.fileServerPath=e.nfsSharePath,n.info.fileServerHost=e.nfsHostName,n.info.fileServerType="nfs"),n}function r(e,t){const n={type:"egdb",path:"/enterpriseDatabases/"+t,info:{dataStoreConnectionType:"shared"}};return"newConnection"===e.serverDatabaseOption?(n.info.connectionString=e.serverConnectionString,n.info.clientConnectionString=e.publisherConnectionString,n.info.dataStoreConnectionType="replicated"):"bigQuery"===e.databaseProvider||"snowflake"===e.databaseProvider?n.info.JDBCConnection=e.jdbcConnection:n.info.connectionString=e.publisherConnectionString,n}const s=async(e,t,n,o)=>{let a,i;if((null==n?void 0:n.length)>0){try{i=JSON.parse(n)}catch(e){return{error:{code:"invalidJSON"}}}a=function(e,t){const{type:n,project_id:o,private_key_id:a,private_key:i,client_email:r,client_id:s,auth_uri:l,token_uri:c,auth_provider_x509_cert_url:d,client_x509_cert_url:u}=t;return{oAuthType:0,projectId:e,url:"jdbc:bigquery://https://www.googleapis.com/bigquery/v2:443",oAuthPvtKeyFile:{type:n,project_id:o,private_key_id:a,private_key:i,client_email:r,client_id:s,auth_uri:l,token_uri:c,auth_provider_x509_cert_url:d,client_x509_cert_url:u}}}(e,i)}else(null==o?void 0:o.length)>0&&(a=function(e,t,n){return{name:"BigqueryArcgisPlatform_RefreshToken",className:"com.esri.sds.bigquery.jdbc.GBQDataSource",oAuthType:2,projectId:e,defaultDataset:t,url:"jdbc:bigquery://https://www.googleapis.com/bigquery/v2:443",oAuthRefreshToken:n}}(e,t,o));return{result:{type:"egdb",path:"/enterpriseDatabases/bigQuerySvrDevDataJdbc",id:null,clientPath:null,info:{JDBCConnection:a}}}};function l(e){const{user:t,password:n,database:o,role:a,server:i,warehouse:r,schema:s}=e;return{path:"/enterpriseDatabases/snowflakeJdbc",type:"egdb",info:{JDBCConnection:{user:t,password:n,database:o,role:a,connectionUrl:`jdbc:snowflake://${i}`,warehouse:r,schema:s}}}}function c(e,t){if("Arango"===e.noSqlProvider){const t={type:"nosql",path:"/nosqlDatabases/Arango_enterprise",info:{systemManaged:!1,dsFeature:"graphStore",isManagedData:!1,category:"database",factory:"nosql",provider:"ArangoDB",implementation:"ArangoDB",purposes:["knowledge-graph"],connectionProperties:{hosts:[],useSsl:e.useSsl,username:e.username,password:e.password,database:e.database}}};return""!==e.hosts?t.info.connectionProperties.hosts=e.hosts.split(","):delete t.info.connectionProperties.hosts,t}const n={type:"nosql",path:`/nosqlDatabases/${t}`,info:{provider:"Neo4J",isManaged:!1,dsFeature:"graphStore",factory:"nosql",implementation:"Neo4j",category:"database",systemManaged:!1,isManagedData:!1,purposes:["knowledge-graph"],connectionProperties:{connectionUri:e.connectionUri,username:e.username,password:e.password,database:e.database,fallbackServerAddresses:[]}}};return""!==e.fallBackServers?n.info.connectionProperties.fallbackServerAddresses.push(e.fallBackServers.split(",")):delete n.info.connectionProperties.fallbackServerAddresses,n}function d(e,t){const n="bdfs"===e.addDataStoreType?e.bdfsCloudProvider:e.provider,o={info:{}},a={credentialType:"accesskey"};return"amazon"===n&&("accessKey"===e.credentialType?(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey):a.credentialType=e.credentialType,"custom"===e.selectedRegion.id?a.regionEndpointUrl=e.storageURL:(a.regionEndpointUrl=g(e.regions,e.selectedRegion),a.region=e.selectedRegion.id),o.info.objectStore=e.bucketName,o.provider="amazon"),"google"===n&&(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey,a.regionEndpointUrl="https://storage.googleapis.com",o.info.objectStore=e.bucketName,o.provider="Google"),"azure"===n&&("sharedKey"===e.azureAuthenticationType?(a.credentialType="accessKey",a.accountKey=e.accountKey):"activeDirectory"===e.azureAuthenticationType?(a.credentialType=e.azureIdentityType,"servicePrincipal"===e.azureIdentityType?(a.tenantId=e.tenantId,a.clientId=e.clientId,a.clientSecret=e.clientSecret):"userAssignedIdentity"===e.azureIdentityType&&(a.managedIdentityClientId=e.clientId)):"sasToken"===e.azureAuthenticationType?(a.credentialType=e.azureAuthenticationType,a.sasToken=e.token):"anonymous"===e.azureAuthenticationType&&(a.credentialType=e.azureAuthenticationType),"other"===e.environment.id||"anonymous"===e.azureAuthenticationType?a.regionEndpointURL=e.endpoint:a.accountEndpoint=g(e.regions,e.environment),a.accountName=e.accountName,o.info.objectStore=e.containerName,o.provider="azure"),"azuredatalakegen2store"===n&&("other"===e.environment.id?a.regionEndpointURL=e.endpoint:a.accountEndpoint=g(e.regions,e.environment),a.credentialType="accessKey",a.accountKey=e.accountKey,o.info.folder=e.cloudFolder?`${e.containerName}/${e.cloudFolder}`:e.containerName,a.accountName=e.accountName,o.provider="azureDataLakeStore"),"alibaba"===n&&(a.accessKeyId=e.accessKey,a.secretAccessKey=e.secretKey,o.info.objectStore=e.bucketName,o.provider="Alibaba",a.regionEndpointUrl="custom"===e.selectedRegion.id?e.storageURL:g(e.regions,e.selectedRegion)),a.defaultEndpointsProtocol="https",e.cloudFolder&&"azuredatalakegen2store"!==n&&(o.info.objectStore=o.info.objectStore+"/"+e.cloudFolder),o.type="cloudStore",o.path="/cloudStores/"+t,o.info.connectionString=JSON.stringify(a),o}function u(e,t){return{type:"bigDataFileShare",path:`/bigDataFileShares/${t}`,info:{connectionString:JSON.stringify({path:e.bdfsFilesharePath}),connectionType:"fileShare"}}}function p(e,t){return{type:"bigDataFileShare",path:`/bigDataFileShares/${t}`,info:{connectionString:JSON.stringify({path:e.bdfsHdfsPath,username:e.bdfsHdfsUsername}),connectionType:"hdfs"}}}function h(e,t){const n={type:"bigDataFileShare",path:"/bigDataFileShares/"+t,info:{connectionString:"",connectionType:"hive"}},o=e.useNonDefaultDatabase;return n.info.connectionString=JSON.stringify({metaStoreUris:e.metastoreUris,database:o&&e.nonDefaultDatabaseName||"default"}),n}function f(e,t){return JSON.stringify({info:{connectionString:JSON.stringify({path:t}),connectionType:"dataStore"},path:`/bigDataFileShares/${e}`,type:"bigDataFileShare"})}function g(e,t){let n;return e.forEach((function(e){e.id===t.id&&(n=e.blobStoreEndpoint||e.storageEndpointSuffix)})),n}const v=async(e,t)=>{const n=e.results.out_connectionString.paramUrl,a=`${t}/Get%20Database%20Connection%20String/jobs/${e.jobId}/${n}`,i=await(0,o.r)(a);return y(i)},y=e=>{const t=e.value;return{connectionStringProps:b(t),connectionString:t}},b=e=>{let t=[];return e&&e.split(";").forEach((e=>{const n=e.split("=");2!==n.length||S(t,n[0])||t.push({key:n[0],value:n[1]})})),t},S=(e,t)=>e.some((e=>e.key===t)),m=()=>{const e=a.c.portal;return e.isPortal&&"ArcGISEnterpriseOnKubernetes"===e.portalDeploymentType},w=e=>e?`${e}/rest/services/System/PublishingTools/GPServer`:""},41171:(e,t,n)=>{n.d(t,{a:()=>D,b:()=>C,c:()=>b,d:()=>w,e:()=>c,f:()=>v,g:()=>S,h:()=>s,i:()=>_,j:()=>y,k:()=>m,l:()=>T,p:()=>p,q:()=>P,r:()=>d});var o=n(66716),a=n(76134),i=n(62381),r=n(26426);function s(e){var t,n,o,i;return null!=e||(e=null===a.c||void 0===a.c?void 0:a.c.portal),(null===(t=null==e?void 0:e.credential)||void 0===t?void 0:t.token)||(null==e?void 0:e.token)||(null===(o=null===(n=null==e?void 0:e.user)||void 0===n?void 0:n.credential)||void 0===o?void 0:o.token)||(null===(i=null==e?void 0:e.portalUser)||void 0===i?void 0:i.token)||""}function l(e){var t;const{config:n}=a.c;return"https:"===window.location.protocol||!0===(null===(t=null==n?void 0:n.self)||void 0===t?void 0:t.allSSL)?e.replace("http:","https:"):e}async function c(e,t,n={},i){const[r]=await(0,o.l)(["esri/request"]),{api:c}=a.c;e.includes("f=")||t.append("f","json");const d=s();return d&&!t.has("token")&&t.append("token",d),new Promise(((o,a)=>{if(3===c){const s={url:!1===n.addSSL?e:l(e),form:t,timeout:n.timeout||0},c="post"===i?Object.assign({usePost:!0},n):n;r(s,c).then(o,a)}else r(e,Object.assign(Object.assign({body:t},n),{timeout:n.timeout||0,method:i||"auto"})).then((e=>{o(e.data)})).catch((e=>a(e)))}))}async function d(e,t={},n={},i,r){const[s]=await(0,o.l)(["esri/request"]),{api:c,portal:d}=a.c,u=Object.assign({},t);if(e.includes("f=")||!0===(null==r?void 0:r.excludeJson)||(u.f="json"),!1!==n.addTokenManually){const e=await w(d,c);u.token=e}const p=!1===n.addSSL?e:l(e);if(3===c)return s(Object.assign({url:p,content:u,timeout:n.timeout||0,withCredentials:n.withCredentials},null==r?void 0:r.v3Request),"post"===i?Object.assign({usePost:!0},n):n);{const e=Object.assign(Object.assign(Object.assign({query:u,method:i||"auto"},n),{timeout:n.timeout||0}),(null==n?void 0:n.disableIdentityLookup)?{authMode:"anonymous"}:{});return(await s(p,e)).data}}const u=[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,15,15,30,30,30,30,30,30,30,30,30,30,120],p=async(e,t,n)=>{var o,a;const i=null!==(o=null==t?void 0:t.pendingStatuses)&&void 0!==o?o:["processing","partial","Pending","InProgress","EXECUTING"],s=null!==(a=null==t?void 0:t.successStatuses)&&void 0!==a?a:["completed","Completed","COMPLETED"];let l=0;const c=async()=>{const o=await d(e,null==t?void 0:t.requestParams,{},n),a=o.status||o.jobStatus;if(i.includes(a))return await(0,r.t)((p=l++,1e3*u[p>-1&&p<u.length-1?p:u.length-1])),c();if(s.includes(a))return o;throw o;var p};try{return c()}catch(e){throw console.error(e),e}},h={},f={},g={};async function v(e,t,n,o){var a,i,r,s;const l=null===(i=null===(a=g[t])||void 0===a?void 0:a[n])||void 0===i?void 0:i.expireAt,c=!!l&&(new Date).getTime()>l;if((null===(r=h[t])||void 0===r?void 0:r[n])&&!c)return h[t][n];f[t]||(f[t]={}),f[t][n]&&!c||(f[t][n]=e());const d=await f[t][n];if(h[t]||(h[t]={}),g[t]||(g[t]={}),h[t][n]=d,o){const{expireAfter:e,getExpireAfterFromResult:a}=o,i=a||e?(new Date).getTime()+(null!==(s=null==a?void 0:a(d))&&void 0!==s?s:e):null;g[t][n]=Object.assign(Object.assign({},g[t][n]),{expireAt:i})}return d}function y(e,t){var n;return null===(n=null==h?void 0:h[e])||void 0===n?void 0:n[t]}const b=(e,t)=>{var n,o;t?(null===(n=h[e])||void 0===n||delete n[t],null===(o=f[e])||void 0===o||delete o[t]):(delete h[e],delete f[e])};function S(e){var t;const{portal:n,config:o}=a.c||{};return null!==(t=(0,i.d)(null==o?void 0:o.restBaseUrl))&&void 0!==t?t:m(e||n)}function m(e){var t;return(0,i.d)(null!==(t=e.restUrl)&&void 0!==t?t:e.portalUrl)}const w=async(e,t)=>{var n,o;if(!(null==e?void 0:e.isPortal)||!e.isWebTierAuth)return s(e);const{token:i}=await v((()=>k(e,null!=t?t:null===a.c||void 0===a.c?void 0:a.c.api)),"platformSelf",null!==(o=null===(n=e.user)||void 0===n?void 0:n.id)&&void 0!==o?o:e.id,{getExpireAfterFromResult:e=>e.expires_in});return i},k=async(e,t)=>{const n=await(async(e,t)=>{var n,a,i,r;const s=3===t,[l]=await o.e.loadModules([s?"esri/IdentityManager":"esri/identity/IdentityManager"]),c=await v((()=>l.getCredential(S(e),{oAuthPopupConfirmation:!1})),"credential",null===(n=e.user)||void 0===n?void 0:n.id);return null!==(r=s?null===(a=c._oAuthCred)||void 0===a?void 0:a.appId:null===(i=c.oAuthState)||void 0===i?void 0:i.appId)&&void 0!==r?r:"arcgisonline"})(e,t),a={"X-Esri-Auth-Client-Id":n,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")};return d(`${S(e)}/oauth2/platformSelf`,{},{disableIdentityLookup:!0,headers:4===t?a:void 0,addTokenManually:!1,withCredentials:!0},"post",{v3Request:{headers:a}})};async function P(e={},t){return d(`${S(t)}/community/groups`,e)}const T=async(e,t)=>{var n;if(!e)return[];const o=`${(0,i.d)(null!==(n=t.restUrl)&&void 0!==n?n:t.portalUrl)}portals/self/servers`,a=await d(o);return null==a?void 0:a.servers},D=e=>C(m(e)),C=e=>{var t;const n=`${(0,i.d)(null!==(t=(0,i.l)(e))&&void 0!==t?t:e)}info`;return v((()=>d(n,{},{addTokenManually:!1})),"portalInfo",n)},_=async(e,t)=>{if(e.isBackedBySDS)return{result:!0};const n=(0,i.e)(t)||(0,i.f)(t)||(0,i.g)(t)||(0,i.h)(t)||(0,i.j)(t);if(e.isPortal&&t&&(n||(0,i.k)(t)))try{const n=await A(t,e);return{result:!!(null==n?void 0:n[0])}}catch(e){return console.error(e),{error:{code:"unhandledError",message:JSON.stringify(e)},result:!1}}return{result:!0}},A=async(e,t)=>{const n=await O(e,t);if(!n)return null;const o=`${n.adminUrl}/admin/data/findItems`;return(await d(o,{managed:!0})).items.filter((e=>{var t;return"arcgis data store"===(null===(t=e.provider)||void 0===t?void 0:t.toLowerCase())}))},O=async(e,t)=>{var n;return(null!==(n=await T(e,t))&&void 0!==n?n:[]).filter((e=>e.isHosted))[0]}},54871:(e,t,n)=>{n.d(t,{a:()=>o,u:()=>a});const o=(0,n(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),a=o.state}}]);