let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/kquirapas/portfolio
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
edit src/index.js
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
exe 'vert 1resize ' . ((&columns * 94 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 190)
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
let s:l = 19 - ((18 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 19
normal! 041|
wincmd w
argglobal
if bufexists("src/content/projects.js") | buffer src/content/projects.js | else | edit src/content/projects.js | endif
if &buftype ==# 'terminal'
  silent file src/content/projects.js
endif
balt src/index.js
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
let s:l = 34 - ((19 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 34
normal! 0406|
wincmd w
exe 'vert 1resize ' . ((&columns * 94 + 95) / 190)
exe 'vert 2resize ' . ((&columns * 95 + 95) / 190)
tabnext 1
badd +42 ./src/components/Contacts.js
badd +57 src/components/Navbar.js
badd +7 src/components/ProjectPrev.js
badd +4 src/components/Projects.js
badd +10 src/components/Footer.js
badd +44 src/modules/fonts.js
badd +25 src/components/Workflow.js
badd +114 src/components/Home.js
badd +12 src/components/DevStack.js
badd +1 src/components/App.js
badd +19 src/index.js
badd +4 src/colors.js
badd +3 src/content/test.md
badd +34 src/content/projects.js
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOF
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
