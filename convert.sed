s/<h1>/# /
s/<h2>/## /
s/<h3>/### /
s/<hr>/---/
s/<\/h.>//
s/<\/\?i>/*/g
s/<img src \?= \?"\(.*\)">/![](\/\1)/g
s/<a href="\(.*\)">\(.*\)<\/a>/[\2](\1)/g
s/<p class \?= \?"centered">/{:.centered}\n/
s/<p class \?= \?"subtitle">/{:.subtitle}\n/
s/<\/\?p>//g
s/<li>/* /
s/<\/li>//
s/^ *//
