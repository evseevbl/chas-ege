var a = getRandomInt(-5,5);
var b = getRandomInt(1,5);

if (a==0){a=1};
if (b==0){b=1};

var c = getRandomInt(-5,5);
var d = getRandomInt(-5,5);
var e = getRandomInt(1,5);

if (c==0){c+=1};
if (d==0){d+=1};
if (e==0){e+=1};

var q = getRandomInt(1,5);
var r = getRandomInt(-5,5);
var s = getRandomInt(1,5);

if (q==0){q+=1};
if (r==0){r+=1};
if (s==0){s+=1};
 

function p(_x)
{
return (a*_x+b);
};


(function(){'use strict';


window.vopr.ver=[ (c*a*d+q*a*r)+'x+'+(c*a*e+c*b + q*a*s + q*b)];

window.vopr.txt=('Найдите значение выражения ('+c+'p('+d+'x+'+e+')+'+q+'p('+r+'x+'+s+'), если p=(' +a+'x+'+b+').' );

})();
//Обзад 26821
//by _zevs
