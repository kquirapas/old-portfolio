let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/kquirapas/projects/kquirapas.github.io
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess=aoO
badd +1 src/components/Projects.js
badd +23 src/components/ProjContent.js
badd +630 src/content/projects.js
badd +1 src/content/test.md
badd +67 src/modules/fonts.js
badd +281 src/components/Home.js
badd +26 src/index.js
badd +68 ./src/components/Contacts.js
badd +166 src/components/Navbar.js
badd +22 src/components/ProjectPrev.js
badd +1 src/components/Footer.js
badd +2 src/components/Workflow.js
badd +9 src/components/DevStack.js
badd +1 src/components/App.js
badd +1 src/colors.js
badd +39 notes
badd +65 src/components/Experiments.js
badd +86 src/components/Markdown.js
badd +31 src/components/ExpContent.js
badd +1 src/content/experiments.js
badd +106 src/components/About.js
badd +1 breakpoints
argglobal
%argdel
edit src/components/Projects.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 85 + 86) / 172)
exe 'vert 2resize ' . ((&columns * 86 + 86) / 172)
argglobal
balt src/components/Home.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 223 - ((20 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 223
normal! 0
wincmd w
argglobal
if bufexists(fnamemodify("src/content/experiments.js", ":p")) | buffer src/content/experiments.js | else | edit src/content/experiments.js | endif
if &buftype ==# 'terminal'
  silent file src/content/experiments.js
endif
balt src/content/projects.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 21) / 43)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 85 + 86) / 172)
exe 'vert 2resize ' . ((&columns * 86 + 86) / 172)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
