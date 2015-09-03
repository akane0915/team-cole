// Created by iWeb 3.0.4 local-build-20121125

function createMediaStream_id1()
{return IWCreateMediaCollection("http://www.teamcole.org/teamcole/Photos_%26_Movies/Photos_%26_Movies_files/rss.xml",true,255,["No photos yet","%d photo","%d photos"],["","%d clip","%d clips"]);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.teamcole.org/teamcole/Photos_%26_Movies',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget7'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.teamcole.org/teamcole/Photos_%26_Movies',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(287,215),new IWSize(287,41),new IWSize(344,271),27,27,0,new IWSize(108,95)),new IWPhotoFrame([IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_ul.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_top.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_ur.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_right.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_lr.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_bottom.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_ll.png'),IWCreateImage('Photos_%26_Movies_files/spiralbook-creme_left.png')],null,1,1.000000,15.000000,0.000000,0.000000,0.000000,83.000000,40.000000,40.000000,55.000000,106.000000,40.000000,40.000000,32.000000,null,null,null,0.300000),imageStream,range,(null),null,1.000000,null,'../Media/slideshow.html','widget7',null,'widget8',{showTitle:true,showMetric:true})});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:10,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:0.750000}),shadow_1:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#463c3c',opacity:0.750000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Photos_&_Movies_files/Photos_&_MoviesMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('../Media/transparent.gif');Widget.onload();fixupAllIEPNGBGs();applyEffects()
initializeMediaStream_id1()}
function onPageUnload()
{Widget.onunload();}
