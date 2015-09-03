// Created by iWeb 3.0.4 local-build-20121125

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id1" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="320" height="196" style="height: 196px; left: 190px; position: absolute; top: 98px; width: 320px; z-index: 1; "><param name="src" value="../../Media/Kidz%20on%20the%20Run%20-%20Team%20Cole%20-%20Event.mp4" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id1" type="video/quicktime" width="320" height="196" style="height: 196px; left: 190px; position: absolute; top: 98px; width: 320px; z-index: 1; "><param name="src" value="Kidz_on_the_Run_files/Kidz%20on%20the%20Run%20-%20Team%20Cole%20-%20Event.jpg"/><param name="target" value="myself"/><param name="href" value="../../../Media/Kidz%20on%20the%20Run%20-%20Team%20Cole%20-%20Event.mp4"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id1" type="video/quicktime" width="320" height="196" data="../../Media/Kidz%20on%20the%20Run%20-%20Team%20Cole%20-%20Event.mp4" style="height: 196px; left: 190px; position: absolute; top: 98px; width: 320px; z-index: 1; "><param name="src" value="../../Media/Kidz%20on%20the%20Run%20-%20Team%20Cole%20-%20Event.mp4"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('../../Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(0.0000,0.0000),color:'#463c3c',opacity:0.680000})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Kidz_on_the_Run_files/Kidz_on_the_RunMoz.css')
fixAllIEPNGs('../../Media/transparent.gif');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
