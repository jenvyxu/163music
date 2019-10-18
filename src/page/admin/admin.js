//import './node_modules/leancloud-storage/dist/av-min.js'
import 'css/admin.css'
import NewSong from './new-song.js'
import SongForm from './song-form.js'
import SongList from './song-list'
import UploadSong from './upload-song.js'

NewSong.controller.init(NewSong.view,NewSong.model)
SongForm.controller.init(SongForm.view,SongForm.model)
SongList.controller.init(SongList.view,SongList.model)

UploadSong.controller.init(UploadSong.view,UploadSong.model)
//UploadSong.controller.initQiniu();
UploadSong.controller.bindEvents();



// <script src="//at.alicdn.com/t/font_738264_ti0454pcc1.js"></script>
// <script src="../vendors/jquery.min.js"></script>
// <script src="../vendors/av-min.js"></script>
// <script src="../vendors/moxie.min.js"></script>
// <script src="../vendors/plupload.full.min.js"></script>
// <script src="../vendors/qiniu.min.js"></script>
// <script src="./js/admin/event-hub.js"></script>
// <script src="./js/initializers/av.js"></script>
// <script src="js/admin/song-form.js"></script>
// <script src="js/admin/new-song.js"></script>
// <script src="js/admin/song-list.js"></script>
// <script src="js/admin/upload-song.js"></script> 