rm *-thumb.png
for i in *; do convert -thumbnail 400x $i $i-thumb.png; done
