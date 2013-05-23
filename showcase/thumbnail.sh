rm *thumb.png
for i in *; do 
convert -thumbnail 400x $i $i-scaled-thumb.png

convert $i-scaled-thumb.png  -virtual-pixel white -set option:distort:viewport "400x260-0-0" \
     -gravity center -filter point -distort SRT 0 +repage $i-thumb.png; 
rm $i-scaled-thumb.png
done
