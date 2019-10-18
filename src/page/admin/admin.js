import 'css/admin.css'
import NewSong from './new-song.js'
import SongForm from './song-form.js'
import SongList from './song-list'
import UploadSong from './upload-song.js'

NewSong.controller.init(NewSong.view,NewSong.model)
SongForm.controller.init(SongForm.view,SongForm.model)
SongList.controller.init(SongList.view,SongList.model)

UploadSong.controller.init(UploadSong.view,UploadSong.model)
