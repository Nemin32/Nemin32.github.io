0,/<body>/ d
s/<h1>/# /
s/<h2>/## /
s/<h3>/### /
s/<\/h.>//
s/^ *//
s/<\/\?p>//g
s/<p class \?= \?"centered">/{:.centered}\n/
s/<img src \?= \?"\(.*\)">/![](\1)/g
s/<a href \?= \?"\(.*\)">\r\?\(.*\)<\/a>/[\2](\1)/g
s/<\/\?i>/_/g
s/<\/\?b>/**/g
/<footer>/, $ d
s/<.*\?>//g
