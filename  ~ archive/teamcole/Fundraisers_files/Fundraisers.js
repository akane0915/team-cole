// Created by iWeb 3.0.4 local-build-20121125

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.teamcole.org/teamcole/Fundraisers_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.teamcole.org/teamcole',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.teamcole.org/teamcole',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(1,new IWSize(648,648),new IWSize(648,72),new IWSize(648,735),27,27,0,new IWSize(24,36)),new IWPhotoFrame([IWCreateImage('Fundraisers_files/Pushpin_01.jpg'),IWCreateImage('Fundraisers_files/Pushpin_02.jpg'),IWCreateImage('Fundraisers_files/Pushpin_03.jpg'),IWCreateImage('Fundraisers_files/Pushpin_06.jpg'),IWCreateImage('Fundraisers_files/Pushpin_09.jpg'),IWCreateImage('Fundraisers_files/Pushpin_02_1.jpg'),IWCreateImage('Fundraisers_files/Pushpin_03_1.jpg'),IWCreateImage('Fundraisers_files/Pushpin_04.jpg')],null,1,0.625000,0.000000,0.000000,0.000000,0.000000,18.000000,18.000000,18.000000,18.000000,298.000000,472.000000,298.000000,472.000000,'Fundraisers_files/bullet_pp_3.png',new IWPoint(0.500000,-10),new IWSize(45,65),0.100000),imageStream,range,new IWShadow({blurRadius:9,offset:new IWPoint(0.7071,0.7071),color:'#463c3c',opacity:0.300000}),null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Fundraisers_files/FundraisersMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
fixAllIEPNGs('Media/transparent.gif');Widget.onload();initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
