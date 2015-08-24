Search.setIndex({envversion:46,filenames:["bigquery-usage","datastore-batches","datastore-client","datastore-entities","datastore-keys","datastore-queries","datastore-transactions","gcloud-api","index","pubsub-client","pubsub-subscription","pubsub-topic","pubsub-usage","storage-acl","storage-blobs","storage-buckets","storage-client"],objects:{"gcloud.client":{Client:[7,4,1,""],JSONClient:[7,4,1,""]},"gcloud.client.Client":{from_service_account_json:[7,6,1,""],from_service_account_p12:[7,6,1,""]},"gcloud.connection":{API_BASE_URL:[7,7,1,""],Connection:[7,4,1,""],JSONConnection:[7,4,1,""]},"gcloud.connection.Connection":{USER_AGENT:[7,1,1,""],credentials:[7,1,1,""],from_environment:[7,6,1,""],from_service_account_json:[7,6,1,""],from_service_account_p12:[7,6,1,""],http:[7,1,1,""]},"gcloud.connection.JSONConnection":{API_BASE_URL:[7,1,1,""],API_URL_TEMPLATE:[7,1,1,""],API_VERSION:[7,1,1,""],api_request:[7,3,1,""],build_api_url:[7,6,1,""]},"gcloud.credentials":{generate_signed_url:[7,5,1,""],get_credentials:[7,5,1,""],get_for_service_account_json:[7,5,1,""],get_for_service_account_p12:[7,5,1,""]},"gcloud.datastore":{batch:[1,0,0,"-"],client:[2,0,0,"-"],connection:[2,0,0,"-"],entity:[3,0,0,"-"],key:[4,0,0,"-"],query:[5,0,0,"-"],transaction:[6,0,0,"-"]},"gcloud.datastore.batch":{Batch:[1,4,1,""]},"gcloud.datastore.batch.Batch":{"delete":[1,3,1,""],add_auto_id_entity:[1,3,1,""],begin:[1,3,1,""],commit:[1,3,1,""],connection:[1,1,1,""],current:[1,3,1,""],dataset_id:[1,1,1,""],mutation:[1,1,1,""],namespace:[1,1,1,""],put:[1,3,1,""],rollback:[1,3,1,""]},"gcloud.datastore.client":{Client:[2,4,1,""]},"gcloud.datastore.client.Client":{"delete":[2,3,1,""],allocate_ids:[2,3,1,""],batch:[2,3,1,""],current_batch:[2,1,1,""],current_transaction:[2,1,1,""],delete_multi:[2,3,1,""],get:[2,3,1,""],get_multi:[2,3,1,""],key:[2,3,1,""],put:[2,3,1,""],put_multi:[2,3,1,""],query:[2,3,1,""],transaction:[2,3,1,""]},"gcloud.datastore.connection":{Connection:[2,4,1,""],SCOPE:[2,7,1,""]},"gcloud.datastore.connection.Connection":{API_URL_TEMPLATE:[2,1,1,""],API_VERSION:[2,1,1,""],allocate_ids:[2,3,1,""],begin_transaction:[2,3,1,""],build_api_url:[2,3,1,""],commit:[2,3,1,""],lookup:[2,3,1,""],rollback:[2,3,1,""],run_query:[2,3,1,""]},"gcloud.datastore.entity":{Entity:[3,4,1,""]},"gcloud.datastore.entity.Entity":{exclude_from_indexes:[3,1,1,""],kind:[3,1,1,""]},"gcloud.datastore.key":{Key:[4,4,1,""]},"gcloud.datastore.key.Key":{completed_key:[4,3,1,""],dataset_id:[4,1,1,""],flat_path:[4,1,1,""],id:[4,1,1,""],id_or_name:[4,1,1,""],is_partial:[4,1,1,""],kind:[4,1,1,""],name:[4,1,1,""],namespace:[4,1,1,""],parent:[4,1,1,""],path:[4,1,1,""],to_protobuf:[4,3,1,""]},"gcloud.datastore.query":{Iterator:[5,4,1,""],Query:[5,4,1,""]},"gcloud.datastore.query.Iterator":{next_page:[5,3,1,""]},"gcloud.datastore.query.Query":{OPERATORS:[5,1,1,""],add_filter:[5,3,1,""],ancestor:[5,1,1,""],dataset_id:[5,1,1,""],fetch:[5,3,1,""],filters:[5,1,1,""],group_by:[5,1,1,""],keys_only:[5,3,1,""],kind:[5,1,1,""],namespace:[5,1,1,""],order:[5,1,1,""],projection:[5,1,1,""]},"gcloud.datastore.transaction":{Transaction:[6,4,1,""]},"gcloud.datastore.transaction.Transaction":{begin:[6,3,1,""],commit:[6,3,1,""],current:[6,3,1,""],id:[6,1,1,""],rollback:[6,3,1,""]},"gcloud.exceptions":{BadRequest:[7,2,1,""],ClientError:[7,2,1,""],Conflict:[7,2,1,""],Forbidden:[7,2,1,""],GCloudError:[7,2,1,""],InternalServerError:[7,2,1,""],LengthRequired:[7,2,1,""],MethodNotAllowed:[7,2,1,""],MovedPermanently:[7,2,1,""],NotFound:[7,2,1,""],NotImplemented:[7,2,1,""],NotModified:[7,2,1,""],PreconditionFailed:[7,2,1,""],Redirection:[7,2,1,""],RequestRangeNotSatisfiable:[7,2,1,""],ResumeIncomplete:[7,2,1,""],ServerError:[7,2,1,""],ServiceUnavailable:[7,2,1,""],TemporaryRedirect:[7,2,1,""],TooManyRequests:[7,2,1,""],Unauthorized:[7,2,1,""],eklass:[7,1,1,""],make_exception:[7,5,1,""]},"gcloud.exceptions.BadRequest":{code:[7,1,1,""]},"gcloud.exceptions.Conflict":{code:[7,1,1,""]},"gcloud.exceptions.Forbidden":{code:[7,1,1,""]},"gcloud.exceptions.GCloudError":{code:[7,1,1,""],errors:[7,1,1,""]},"gcloud.exceptions.InternalServerError":{code:[7,1,1,""]},"gcloud.exceptions.LengthRequired":{code:[7,1,1,""]},"gcloud.exceptions.MethodNotAllowed":{code:[7,1,1,""]},"gcloud.exceptions.MovedPermanently":{code:[7,1,1,""]},"gcloud.exceptions.NotFound":{code:[7,1,1,""]},"gcloud.exceptions.NotImplemented":{code:[7,1,1,""]},"gcloud.exceptions.NotModified":{code:[7,1,1,""]},"gcloud.exceptions.PreconditionFailed":{code:[7,1,1,""]},"gcloud.exceptions.RequestRangeNotSatisfiable":{code:[7,1,1,""]},"gcloud.exceptions.ResumeIncomplete":{code:[7,1,1,""]},"gcloud.exceptions.ServiceUnavailable":{code:[7,1,1,""]},"gcloud.exceptions.TemporaryRedirect":{code:[7,1,1,""]},"gcloud.exceptions.TooManyRequests":{code:[7,1,1,""]},"gcloud.exceptions.Unauthorized":{code:[7,1,1,""]},"gcloud.pubsub":{client:[9,0,0,"-"],connection:[9,0,0,"-"],subscription:[10,0,0,"-"],topic:[11,0,0,"-"]},"gcloud.pubsub.client":{Client:[9,4,1,""]},"gcloud.pubsub.client.Client":{list_subscriptions:[9,3,1,""],list_topics:[9,3,1,""],topic:[9,3,1,""]},"gcloud.pubsub.connection":{Connection:[9,4,1,""],SCOPE:[9,7,1,""]},"gcloud.pubsub.connection.Connection":{API_BASE_URL:[9,1,1,""],API_URL_TEMPLATE:[9,1,1,""],API_VERSION:[9,1,1,""]},"gcloud.pubsub.subscription":{Subscription:[10,4,1,""]},"gcloud.pubsub.subscription.Subscription":{"delete":[10,3,1,""],acknowledge:[10,3,1,""],create:[10,3,1,""],exists:[10,3,1,""],from_api_repr:[10,6,1,""],modify_ack_deadline:[10,3,1,""],modify_push_configuration:[10,3,1,""],path:[10,1,1,""],pull:[10,3,1,""],reload:[10,3,1,""]},"gcloud.pubsub.topic":{Batch:[11,4,1,""],Topic:[11,4,1,""]},"gcloud.pubsub.topic.Batch":{commit:[11,3,1,""],publish:[11,3,1,""]},"gcloud.pubsub.topic.Topic":{"delete":[11,3,1,""],batch:[11,3,1,""],create:[11,3,1,""],exists:[11,3,1,""],from_api_repr:[11,6,1,""],full_name:[11,1,1,""],path:[11,1,1,""],project:[11,1,1,""],publish:[11,3,1,""],subscription:[11,3,1,""]},"gcloud.storage":{acl:[13,0,0,"-"],blob:[14,0,0,"-"],bucket:[15,0,0,"-"],client:[16,0,0,"-"],connection:[16,0,0,"-"]},"gcloud.storage.acl":{ACL:[13,4,1,""],BucketACL:[13,4,1,""],DefaultObjectACL:[13,4,1,""],ObjectACL:[13,4,1,""]},"gcloud.storage.acl.ACL":{add_entity:[13,3,1,""],all:[13,3,1,""],all_authenticated:[13,3,1,""],clear:[13,3,1,""],client:[13,1,1,""],domain:[13,3,1,""],entity:[13,3,1,""],entity_from_dict:[13,3,1,""],get_entities:[13,3,1,""],get_entity:[13,3,1,""],group:[13,3,1,""],has_entity:[13,3,1,""],loaded:[13,1,1,""],reload:[13,3,1,""],reload_path:[13,1,1,""],reset:[13,3,1,""],save:[13,3,1,""],save_path:[13,1,1,""],user:[13,3,1,""]},"gcloud.storage.acl.BucketACL":{client:[13,1,1,""],reload_path:[13,1,1,""],save_path:[13,1,1,""]},"gcloud.storage.acl.ObjectACL":{client:[13,1,1,""],reload_path:[13,1,1,""],save_path:[13,1,1,""]},"gcloud.storage.blob":{Blob:[14,4,1,""]},"gcloud.storage.blob.Blob":{"delete":[14,3,1,""],acl:[14,1,1,""],cache_control:[14,1,1,""],chunk_size:[14,1,1,""],client:[14,1,1,""],component_count:[14,1,1,""],content_disposition:[14,1,1,""],content_encoding:[14,1,1,""],content_language:[14,1,1,""],content_type:[14,1,1,""],crc32c:[14,1,1,""],download_as_string:[14,3,1,""],download_to_file:[14,3,1,""],download_to_filename:[14,3,1,""],etag:[14,1,1,""],exists:[14,3,1,""],generate_signed_url:[14,3,1,""],generation:[14,1,1,""],id:[14,1,1,""],make_public:[14,3,1,""],md5_hash:[14,1,1,""],media_link:[14,1,1,""],metadata:[14,1,1,""],metageneration:[14,1,1,""],owner:[14,1,1,""],path:[14,1,1,""],path_helper:[14,8,1,""],public_url:[14,1,1,""],self_link:[14,1,1,""],size:[14,1,1,""],storage_class:[14,1,1,""],time_deleted:[14,1,1,""],updated:[14,1,1,""],upload_from_file:[14,3,1,""],upload_from_filename:[14,3,1,""],upload_from_string:[14,3,1,""]},"gcloud.storage.bucket":{Bucket:[15,4,1,""]},"gcloud.storage.bucket.Bucket":{"delete":[15,3,1,""],acl:[15,1,1,""],blob:[15,3,1,""],client:[15,1,1,""],configure_website:[15,3,1,""],copy_blob:[15,3,1,""],cors:[15,1,1,""],create:[15,3,1,""],default_object_acl:[15,1,1,""],delete_blob:[15,3,1,""],delete_blobs:[15,3,1,""],disable_logging:[15,3,1,""],disable_website:[15,3,1,""],enable_logging:[15,3,1,""],etag:[15,1,1,""],exists:[15,3,1,""],get_blob:[15,3,1,""],get_logging:[15,3,1,""],id:[15,1,1,""],lifecycle_rules:[15,1,1,""],list_blobs:[15,3,1,""],location:[15,1,1,""],make_public:[15,3,1,""],metageneration:[15,1,1,""],owner:[15,1,1,""],path:[15,1,1,""],path_helper:[15,8,1,""],project_number:[15,1,1,""],rename_blob:[15,3,1,""],self_link:[15,1,1,""],storage_class:[15,1,1,""],time_created:[15,1,1,""],versioning_enabled:[15,1,1,""]},"gcloud.storage.client":{Client:[16,4,1,""]},"gcloud.storage.client.Client":{batch:[16,3,1,""],bucket:[16,3,1,""],connection:[16,1,1,""],create_bucket:[16,3,1,""],current_batch:[16,1,1,""],get_bucket:[16,3,1,""],list_buckets:[16,3,1,""],lookup_bucket:[16,3,1,""]},"gcloud.storage.connection":{Connection:[16,4,1,""],SCOPE:[16,7,1,""]},"gcloud.storage.connection.Connection":{API_BASE_URL:[16,1,1,""],API_URL_TEMPLATE:[16,1,1,""],API_VERSION:[16,1,1,""]},gcloud:{client:[7,0,0,"-"],connection:[7,0,0,"-"],credentials:[7,0,0,"-"],exceptions:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","attribute","Python attribute"],"2":["py","exception","Python exception"],"3":["py","method","Python method"],"4":["py","class","Python class"],"5":["py","function","Python function"],"6":["py","classmethod","Python class method"],"7":["py","data","Python data"],"8":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:attribute","2":"py:exception","3":"py:method","4":"py:class","5":"py:function","6":"py:classmethod","7":"py:data","8":"py:staticmethod"},terms:{"09df":0,"3xx":7,"4ae0":0,"4xx":7,"5xx":7,"__exit__":12,"__init__":7,"__key__":5,"_aclent":13,"_blobiter":15,"_connection_class":7,"_datastore_v1_pb2":[1,2,4],"_helper":[14,15],"_propertymixin":[14,15],"_serviceaccountcredenti":7,"_target_object":7,"abstract":[1,5,6,7,13],"boolean":[2,4,5,7,9,10,11,13,14,15],"byte":[1,3,5,11,14],"case":[1,3,14],"catch":16,"class":[1,2,3,4,5,6,7,9,10,11,13,14,15,16],"default":[0,1,2,5,6,7,9,12,13,14,15,16],"final":4,"float":5,"function":[7,14],"import":[0,1,2,5,6,8,12,13,15],"int":[0,7,9,10,11,14],"long":[7,14,15],"new":[0,4,7,10,12,13,15,16],"public":[14,15],"return":[1,2,3,4,5,6,7,9,10,11,13,14,15,16],"short":13,"static":[14,15],"true":[0,2,4,7,10,11,12,13,14,15],"try":[6,7,8,14,15,16],"while":[0,7],abel:0,abil:1,abl:[7,8,13,14],about:[7,14,15],absenc:14,accept:[4,7],access:[0,7,13,14,15],accesslog:15,accident:15,account:[7,13,14],ack:[10,12],ack_deadlin:[10,11,12],ack_id:[10,12],acknowledg:[10,11,12],across:0,act:[3,7,9,16],action:0,activ:[2,16],actual:[3,13],adamson:0,add:[1,7,11,13,15],add_auto_id_ent:1,add_ent:13,add_filt:[2,5],addit:7,address:13,advanc:[2,7],after:[0,3,12,13],again:3,against:[0,5,7],age_count:0,agent:7,agre:11,akin:3,alia:7,all:[0,3,4,12,13,14,15,16],all_authent:13,alloc:2,allocate_id:2,allocateid:2,allow:[0,3,7,8,14],allus:13,along:2,alread:1,alreadi:[1,6,13,15,16],also:[1,6,7,13,15],altern:[0,13],amount:14,ancestor:5,ani:[1,2,3,7,13,14],anoth:[0,9,12],anyth:[13,15],api_access_endpoint:7,api_bas:2,api_base_url:[2,7,9,16],api_request:7,api_url_templ:[2,7,9,16],api_vers:[2,7,9,16],app:[7,13],appar:15,appassertioncredenti:7,append:0,appendix:14,appengin:7,appli:[0,2,5],applic:[0,10,11,12,13,14],approv:15,apt:8,arbitrari:14,arg:7,argument:[2,4,7],around:[7,14],assembl:7,assert:6,assign:[1,3,5,6,11,15],associ:[4,7,9,14,16],assum:7,attach:7,attempt:[0,15],attr1:12,attr2:12,attr:11,attribut:[2,7,11,12,15],auth:[2,7,9,16],authent:[0,2,7,9,12,13,16],authorized_us:7,automat:[1,3,6],avail:[6,10,14,15,16],back:[0,1,2,3,6,7,9,10,11,12,13,14,15,16],backend:[2,3,15],background:0,bad:7,badrequest:7,base:[1,2,3,4,5,6],base_url:2,basi:13,basic:[2,4,7],bcp47:14,bearer:7,becaus:6,been:[1,4,5,14],befor:14,beforehand:8,begin:[0,1,2,5,6,14,16],begin_transact:2,begintransact:2,begintransactionrespons:2,begun:6,behalf:[7,9,16],behavior:7,belong:[2,10,13,14,16],between:2,beverli:0,bigqueri:0,bill:0,birth_dat:0,blank:13,blob:[7,8,13],blob_nam:[14,15],blob_valu:[1,3],block:[1,6,10,12],bodi:7,both:[0,2,12],bound:[0,2,7,9,11,13,14,15,16],bowman:0,breviti:13,bucket:[0,7,8,13,14],bucket_nam:[0,13,15,16],bucket_path:14,bucketacl:13,build:[1,2,6,7,9,13,16],build_api_url:[2,7],built:[1,3],builtin:3,bulk:[1,6],bundl:[7,9,16],cach:14,cache_control:14,call:[0,1,2,6,7,9,10,11,15,16],callabl:15,callback:15,caller:7,can:[0,1,3,6,7,8,9,11,12,13,14,16],cannot:[0,7],capabl:[2,7],certain:14,chain:13,chang:[0,3,5,13],check:[0,7,12,13,16],checksum:14,child:4,chunk:[14,15],chunk_siz:[14,15],classmethod:[0,7,10,11],clear:13,client:[0,1],client_email:7,client_id:7,client_secret:7,clienterror:7,clientsecret:7,clone:8,close:[0,7],cloud:[0,1,2,3,5,7],code:[1,6,7],collect:[0,1,11],com:[0,1,2,7,8,9,10,11,12,13,14,15,16],come:2,command:7,commit:[1,2,6,11],compat:13,complet:[0,1,2,6,7],completed_kei:4,compon:[7,14],component_count:14,compos:14,comput:[7,13,14],concept:[1,14,15],concret:7,configure_websit:15,conflict:[7,15,16],connect:[0,1],connection_typ:7,consist:[2,4],consol:[0,2,7],constant:7,construct:[2,7,9,10,11,13],constructor:[0,7,9,15,16],consum:[2,9,16],contain:[0,2,7,13,15],content:[7,8,14],content_disposit:14,content_encod:14,content_languag:14,content_md5:7,content_typ:[7,14],contentlanguag:15,context:[1,2,6,11,12],control:[0,5,13,14],conveni:[2,5],convert:[3,12],copy_blob:15,copy_to:0,cor:15,correct:7,correspond:[1,4,7,13,14],costli:15,could:[3,15],count:[0,14],cousin:7,cowardli:15,crc32c:14,creat:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16],create_bucket:16,cred:0,credenti:[0,2],crypto:8,csv:0,current:[1,2,3,4,5,6,7,9,10,11,13,14,15,16],current_batch:[2,16],current_d:0,current_transact:2,cursor:[2,5],custom:7,databas:[3,8],dataset_id:[1,2,4,5],dataset_nam:0,datastor:1,datastore_batch_oper:1,datastore_pb:2,datastoreservic:2,datediff:0,datetim:[0,5,7,14,15],deadlin:[10,11,12],deal:2,decod:3,default_object_acl:15,default_table_expiration_m:0,defaultobjectacl:[13,15],defer:[2,7],defin:[2,7,9,10,11,14,16],delet:[0,1,2,3,6,10,11,12,14,15],delete_blob:[14,15],delete_multi:2,delimit:15,delimt:15,deliveri:15,demand:[14,15],depend:14,deriv:6,descend:5,describ:[0,7,15],descript:0,destin:0,destination_bucket:15,destination_format:0,destination_t:0,detail:[7,14,15],detect:7,determin:[0,12,14,15],dev:8,develop:[0,7,15],devstorag:16,dict:[3,4,7,10,11,13,14,15],dictionari:[3,4,7,13,15],differ:7,directli:[0,2,7,12],directori:15,disabl:15,disable_log:15,disable_websit:15,discoveri:7,disposit:14,distinct:2,do_some_work:[1,6],do_someth:0,doc:[1,7,14,15],document:[7,14],doe:[1,2,4,11,15,16],doesn:[13,15],doesnt:[15,16],domain:[0,13,15],don:[1,5,6,14],done:[0,1,7,13],download:[7,14],download_as_str:14,download_to_fil:14,download_to_filenam:14,duplic:[3,15],dur:1,durabl:[14,15],durable_reduced_avail:[14,15],dure:[1,12],e3344fba:0,each:[0,3,5,7,11,13,15,16],effect:[6,14,15],either:[0,4,6,7,13,14],eklass:7,element:[4,6],els:[6,12,14,15],elsewher:7,email:2,empti:[2,7,15],emul:[11,15],enabl:15,enable_log:15,encod:[3,14],end:[0,3,5,10,11,12],end_cursor:5,endpoint:[7,10,12],engin:[7,14],enter:6,entir:3,entiti:[0,1,2],entity1:[1,6],entity2:[1,6],entity_dict:13,entity_from_dict:13,entity_typ:[0,13],entitykind:[3,4],entri:[1,13],environ:[0,2,7,9,12,16],equal:2,equival:5,error:[1,6,7],error_info:7,etag:[14,15],etc:[7,13],even:[4,10,13],eventu:2,everi:1,everyth:8,exampl:[0,1,5,6,7,12,13,15,16],except:[1,6],exclude_from_index:3,execut:[0,1,5,6],exist:[0,1,2,3,4,6,10,11,12,13,14,15,16],exit:[1,6],expect:[0,7],expect_json:7,expir:[0,7,14],explicit:[0,7],explicitli:[1,6,7,14],export_to_storag:0,express:5,extra:[3,4,7],extract:0,extrem:15,factori:[0,2,7,10,11,13,15,16],fail:7,fall:[2,7,9,10,11,13,14,15,16],fals:[0,2,9,10,11,13,14,15],far:1,favor:2,fddee34b3840:0,fetch:[2,5,12],fetch_pag:2,few:7,field:[0,3,5,13,15,16],file:[0,7,8,14,15],file_obj:[0,14],filenam:[14,15],filesystem:14,fill:2,filter:[5,15,16],find:15,fine:5,first:[0,7,9,12,15,16],firstnam:0,flag:[7,13],flat_path:4,floor:0,follow:[1,6,7,13,14],foo:4,forbidden:7,forc:15,form:5,format:7,found:[7,15,16],friendly_nam:0,from:[0,1,2,3,4,5,6,7,8,9,10,11],from_api_repr:[10,11],from_environ:7,from_service_account_json:[0,7,12],from_service_account_p12:[0,7,12],fstat:14,full:[4,13,15,16],full_control:16,full_nam:[0,11],fulli:[8,11],futur:15,gae:0,gce:[0,7,14],gcloud:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],gcloud_project:[0,12],gclouderror:7,gener:[0,2,6,7,14],generate_signed_url:[7,14],get:[0,2,3,5,7],get_blob:15,get_bucket:[8,13,15,16],get_connect:7,get_credenti:7,get_ent:13,get_for_service_account_json:7,get_for_service_account_p12:7,get_log:15,get_multi:2,getter:[1,4,6,7,13,14],git:8,github:[7,8,14],give:[7,14],given:[2,5,7,9,10,11,14,15],goe:0,googl:[0,1,2,7,8,9,10,11,13,14,15,16],google_application_credenti:[0,7,12],googleapi:[2,7,9,16],googlecloudplatform:[7,8,14],googlecredenti:7,grant:[0,13],grant_:13,grant_own:13,grant_read:13,grant_writ:13,granular:13,group:[1,5,13],group_bi:5,guess:14,guess_typ:14,handl:[7,14],happen:[12,13],has_ent:13,hash:[7,14],have:[0,2,4,6,7,8,10,13,14],header:[0,7,14],here:0,hierarchi:15,hold:[0,5,10,11,12,15],hood:[2,7,13],hook:12,host:15,howev:[1,2,3,6,7],html:[7,14,15],http:[1,2,7,9,10,11,12,14,15,16],httplib2:[2,7,9,16],id_or_nam:4,ident:13,identifi:[4,13],ietf:[14,15],immut:4,implement:[2,7,15,16],implicit:[5,7],implicitli:[0,4,7,12],includ:[0,5,15,16],incompat:2,incomplet:7,incomplete_kei:2,increas:13,index:[3,15],indic:[2,4,7,9],individu:15,infer:[0,2,7,9,16],info:[14,15],inform:7,infrastructur:8,inherit:0,initi:[6,7],insert_auto_id:[1,6],insid:[1,6,15],instal:8,instanc:[0,1,3,4,7,10],instanti:[15,16],instead:7,integ:[0,2,4,5,14,15,16],intend:7,interact:[1,4,5,6,7,9,13,14,15,16],intern:[2,7],internalservererror:7,invalid:5,invok:2,is_parti:[4,6],isn:[15,16],isol:[2,6],issu:[7,14],item:[15,16],iter:[5,13,14,15,16],itself:1,jame:5,job_complet:0,job_id:0,jrandom:0,json:[0,7,9,14,16],json_api:[7,14,15],json_credentials_path:7,jsonclient:[7,9,16],jsonconnect:[7,9,16],just:[2,3,14,15,16],keep:1,kei:[1,2,3],key3:1,key_pb:2,keys_onli:5,keyword:[2,4,7],kind:[2,3,4,5],know:3,known:[7,13],kwarg:[2,4,7],lambda:15,languag:[14,15,16],larg:15,last:4,last_nam:0,later:[7,12],latest:7,left:13,length:[4,7],lengthrequir:7,level:[0,2,5,7],librari:[0,7,8],libssl:8,lifecycl:[14,15],lifecycle_rul:15,like:[3,7,13,14,15],limit:[5,9,12],line:7,link:[14,15],list:[0,1,2,4,5,7,9,10,12,13,15,16],list_blob:15,list_bucket:16,list_dataset:0,list_subscript:[9,12],list_tabl:0,list_top:[9,12],live:2,load:[0,13],load_from_fil:0,load_from_storag:0,local:[0,10,14,15],locat:[0,15],log:[14,15],logbucket:15,logobjectprefix:15,longer:0,look:2,lookup:[2,13],lookup_bucket:16,low:5,made:0,mai:[4,7],mail:[7,13],main:15,main_page_suffix:15,make:[1,2,5,7,9,13,14,15,16],make_except:7,make_publ:[14,15],manag:[0,1,6,8,11],mani:7,manipul:13,manual:6,map:[0,1,2,5,7,10,14,15],marker:[9,15,16],match:[1,2,5,16],max_messag:[10,12],max_result:[0,15,16],maximum:[9,10,15,16],md5:[7,14],md5_hash:14,mean:[3,6,7,15],media:14,media_link:14,messag:[7,10,11],message_id1:12,message_id2:12,message_id:12,message_payload:12,metadata:[0,13,14],metagener:[14,15],meth:[0,11],method:[1,2,6,7,13,14,15],methodnotallow:7,might:3,mime:7,mimetyp:14,miss:2,mode:0,modifi:7,modify_ack_deadlin:10,modify_push_configur:[10,12],modifypushconfig:10,more:[0,2,5,9,10,15],more_result:[2,5],move:7,movedperman:7,multipl:[1,2,14,15],must:[0,2,7,10,11,12,14,15,16],mutabl:[3,13],mutat:[1,2,6],mutation_pb:2,mutationresult:2,mutuat:[1,6],mykind:2,name:[0,2,3,4,5,7,8,9,10,11,12,14,15,16],namespac:[1,2,4,5],nearlin:[14,15],necessari:6,need:[1,7,9,15,16],neither:7,never:14,new_nam:15,newli:[10,15,16],next:[9,15,16],next_pag:5,next_page_token:[0,12],nextpagetoken:[15,16],noacl:[15,16],non:[2,7,8,12,13],none:[0,1,2,3,4,5,6,7,9,10,11,12,13,14,15,16],nonetyp:[2,4,7,9,10,11,13,14,15,16],nor:7,not_found_pag:15,note:[12,13],notfound:[7,14,15,16],notimpl:7,notmodifi:7,nullabl:0,num_id:2,num_retri:14,number:[2,5,9,10,12,14,15,16],oauth2:[2,7,9,14,16],oauth2client:[2,7,9,14,16],oauth2credenti:[2,7,9,14,16],object:[0,1,2,3,4,5,7,9,10,11,12,13],object_name_glob:0,object_prefix:15,objectacl:13,obtain:2,octet:14,odd:4,offici:3,offset:5,old:15,on_error:15,onc:[1,6,15],one_day_m:0,onli:[2,3,4,5,7,12,14,15],opaqu:[9,15,16],open:[0,14],openssl:8,operatiuon:1,option:[2,3,5,7,9,13,14,15,16],order:[1,5,7,13,15],org:[7,13,14,15],other:[3,7,13],otherwis:15,our:[1,2,14,15],over:[1,2,5,7],overrid:0,overridden:1,overwrit:14,own:[2,7,9,13,15,16],owner:[0,13,14,15],p12:[0,7],packag:[7,8],page:[5,9,15,16],page_s:9,page_token:[9,15,16],pair:[11,13],param:2,paramet:[1,2,3,4,5,6,7,9,10,11,13,14,15,16],parent:[3,4,13],parent_kei:4,pars:[7,10,11,14,15],part:[1,5],partial:[1,2,3,4,15,16],particular:[2,7,9,13,16],particularli:14,pass:[0,2,4,5,7,9,10,11,13,14,15,16],patch:[0,13],path:[0,4,7,9,10,11,13,14,15,16],path_arg:[2,4],path_help:[14,15],payload:11,peform:0,pend:12,per:[13,14,15],period:[0,14],perman:[5,7],permiss:[0,13],persist:3,person:[0,5,8],person_ag:0,person_ages_copi:0,pick:0,piec:7,pip:8,pkcs12:7,plain:14,plan:7,platform:[7,9],plu:9,point:7,pointer:[3,7],polici:[0,14,15],poll:0,popul:16,posit:7,possibl:[3,14],post:[7,11],preced:7,precompil:8,precondit:7,preconditionfail:7,prefix:[0,15,16],prepend:5,prevent:15,primit:7,print:[13,15,16],print_head:0,privat:7,private_kei:7,private_key_id:7,private_key_path:7,probabl:15,product:7,project_id:0,project_numb:15,propag:[14,15],proper:7,properti:[0,1,2,3,5,14,15,16],property_nam:5,protect:7,protobuf:[1,2,4,5],protocol:7,provid:[0,1,2,6,7,13,14,15,16],proxi:2,public_url:14,publicli:14,publish:[10,11],pubsub:[0,7,9,10,11,12],pull:[10,11],push:[10,11,12],push_endpoint:[10,11,12],put:[1,2,3,6,8,10,11],put_multi:[2,3,6],pycrypto:8,pyopenssl:8,python2:[1,3],python3:[1,3],python:[3,7,8,14],qualifi:11,query_async:0,query_param:7,query_pb:2,rais:[1,2,4,5,6,7,11,14,15,16],rang:7,rather:[7,14,16],read:[2,13,14],read_onli:16,read_writ:16,reader:0,readi:7,realli:15,reason:7,receiv:[10,11,12],recommend:7,recurs:15,recv:12,redirect:7,reduc:[14,15],refer:[6,7,9,10,11,13],referenc:7,refresh:[0,7],refresh_token:7,refus:15,regular:3,rel:[14,15],relat:[3,7,8,13,15],reli:3,reload:[0,10,13],reload_path:13,remain:[4,7],rememb:1,remov:[1,13],renam:15,rename_blob:15,replac:[0,1],repositori:8,repres:[0,1,2,3,4,5,6,7,13,15],represent:[4,10,11],request:[0,1,2,5,7,9,10,11,12,13,14,15,16],requestrangenotsatisfi:7,requir:[0,2,3,4,5,7,9,11,14,15,16],reset:13,resourc:[7,10,11,14],respons:[7,15,16],rest:[9,10,11,16],restrict:5,result:[0,2,5,9,16],resum:7,resumeincomplet:7,retri:14,retriev:[2,3,7,9,10,14,15],retry_count:0,return_immedi:[10,12],revok:13,revoke_:13,revoke_own:13,revoke_read:13,revoke_writ:13,rewind:14,rfc2616:[7,14,15],rfc3339:[14,15],rfc4960:14,rfc6266:14,rfc7231:14,rfc7234:14,rfc:11,role:[0,13,14,15],roll:[1,6],rollback:[1,2,6],root:2,row:[0,3],rpc:2,rule:[13,15],run:[0,1,2],run_queri:2,runqueri:2,runtim:15,sai:15,salli:5,same:[1,4,6,13,15],satisfi:7,save:[1,2,3,6,11,13],save_path:13,schema:0,schemafield:0,schemaless:8,scope:[2,7,9,16],sec10:7,second:[7,10,11,12],secret:7,section:[14,15],see:[1,7,9,10,11,14,15],seek:[7,14],select:0,selector:[15,16],self:[14,15],self_link:[14,15],send:[1,2,7,11,12,13],sent:1,separ:15,sequenc:[3,5,10,15],serializ:2,serv:5,server:[0,1,2,7,11],servererror:7,servic:[0,3,7,12,14],service_account:7,serviceunavail:7,set:[0,1,2,3,4,5,6,7,9,10,11,12,14,15,16],setup:8,sever:0,shortcut:15,should:[2,7,14,15],shouldn:[2,7],side:6,sign:[7,13,14],signedjwtassertioncredenti:7,simpl:7,simpli:[7,15,16],singl:[1,2,3,5,7,11,12],size:[14,15],skip_leading_row:0,skipped_result:2,sleep:0,slow:15,snapshot:2,snippet:[1,6],some:7,someexcept:6,somehow:15,someth:15,sorri:16,sort:5,sourc:[1,2,3,4,5,6,7,8,9,10,11,13,14,15,16],source_format:0,source_t:0,special:13,specif:[0,7,13,14,15],specifi:[5,15,16],specifyingloc:15,stack:[2,6,16],standard:[7,14,15],start:0,start_cursor:5,state:[0,1,5],statement:[1,6],statu:[7,15],step:3,still:13,stop:2,storag:[0,7],storage_class:[14,15],store:[1,3,5,7,8,10,11,13,14,15],str:[1,3,5,9,11],stream:14,string:[0,2,3,4,5,6,7,9,10,11,13,14,15,16],string_valu:1,strong:2,stuff:15,subclass:[3,7],submit:[0,15],subscrib:11,subscript:9,subscription_nam:12,subsequ:10,sudo:8,superflu:7,suppli:5,support:7,suppress:15,sure:1,sync:10,table_nam:0,take:[0,3,5,15],talk:7,target:11,techniqu:15,templat:[2,7,9,16],temporari:7,temporarili:15,temporaryredirect:7,test:[7,8,10,11],text:[1,3,7,14],text_valu:3,than:[0,7,14,15,16],thei:[0,7],them:[1,12],therefor:0,thi:[0,1,2,3,5,6,7,8,9,12,13,14,15,16],thin:2,thing:[5,6],those:[1,6,11,14],through:5,time:[0,6,7,14],time_cr:15,time_delet:14,timedelta:[7,14],timeout:0,timeout_m:0,timestamp:[11,14,15],timestamp_messag:[9,11],to_protobuf:[2,4],togeth:13,token:[7,9,15,16],too:7,tool:[7,14,15],toomanyrequest:7,top:[0,2,16],topic:[9,10],topic_nam:[9,12],topmost:[1,6],track:1,transact:[1,2],transaction_id:2,transat:2,transport:7,tripl:2,troubl:8,truncat:0,tupl:[2,3,4,5,7,9,10,13],two:[1,6],txt:[7,8,15],type:[0,1,2,3,4,5,6,7,9,10,11,13,14,15,16],typeerror:7,typic:[2,7,15],tzinfo:0,ubuntu:8,unauthor:7,unavail:7,under:[2,7,13],underli:14,understand:[2,7],unicod:[1,3],uniqu:[13,14],unless:[4,7],unmarshal:2,until:[0,6,7,10,14],updat:[0,1,7,10,14],upload:14,upload_from_fil:14,upload_from_filenam:14,upload_from_str:[8,14],upon:[1,6],upsert:6,uri:[7,14,15],url:[2,7,9,10,11,14,15,16],use_json:7,user:[7,13,14],user_ag:7,userinfo:2,usual:2,utc:0,utf:[3,14],uuid:0,v1beta2:[2,9,10,11],val:2,valid:[14,15],valu:[0,1,2,3,5,7,9,11,13,14,16],value1:12,value2:12,valueerror:[1,2,4,5,6,7,11,14,15],variabl:[0,7,12],verb:[7,14],veri:15,version:[2,7,9,14,15,16],versioning_en:15,via:[0,2,9,10,11,12,14,16],want:[1,6,8,14,15],websit:15,well:[6,7,15],when:[0,1,2,3,6,7,9,13,14,15,16],whenev:[14,15],where:[2,5,9],whether:[13,14,15],which:[0,1,2,3,5,7,9,10,11,13,14,15,16],whole:15,whose:[3,4,16],within:[0,6,14],without:[1,3,6,7,12],won:[6,7,13,14],work:[1,15],would:[3,7,16],wouldn:2,wrapper:[2,7,14],writabl:0,write:[13,14],write_disposit:0,writeabl:0,writer:0,www:[2,7,9,15,16],xact:6,you:[1,2,3,6,7,8,13,14,15,16],your:[0,2,7,8,12,15],zip:0},titles:["Using the API","Batches","Datastore Client","Entities","Keys","Queries","Transactions","Shared Core Modules","Getting started","Pub/Sub Client","Subscriptions","Topics","Using the API","ACL","Blobs / Objects","Buckets","Storage Client"],titleterms:{"export":0,acl:[0,13],api:[0,12],async:0,asynchron:0,author:[0,12],base:7,batch:1,blob:14,bucket:15,client:[2,7,9,16],cloud:8,configur:[0,12],connect:[2,7,9,16],copi:0,core:7,credenti:7,data:0,dataset:0,datastor:[2,8],entiti:3,except:7,from:12,get:8,helper:7,insert:0,job:0,kei:4,manag:12,messag:12,modul:7,object:14,oper:0,project:[0,12],pub:9,publish:12,pull:12,queri:[0,5],share:7,start:8,storag:[8,16],sub:9,subscript:[10,12],synchron:0,tabl:0,topic:[11,12],transact:6}})