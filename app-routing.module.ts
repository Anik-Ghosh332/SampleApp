import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';


const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/"},
  {path: "user", component: UserComponent},
  {path: "post", component: PostComponent},
  {path: "comment", component: CommentComponent},
  {path: "album", component: AlbumComponent},
  {path: "photo", component: PhotoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
