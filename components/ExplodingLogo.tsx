import { useScrollAndHeight } from './useScrollAndHeight'
import { useEffect, useRef, useState } from 'react'

export function ExplodingLogo({ offset, position, className }: {
  offset: number,
  position?: number,
  className?: string
}) {
  const { scroll, height } = useScrollAndHeight(1)
  const [ ref, center ] = useClientCenter(height)
  const s = scroll * ( 300  / ((position || center) - offset)) - offset
  const r = prng(1234567890)

  return (
    <svg
      ref={ref}
      className={className}
      style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}
      viewBox="0 0 1124 142">
      <g transform="translate(562, 71)">

        <g fill="#FF744C">
          {/* L */}
          <rect opacity="0.70" style={_l(s-30)} x="-562" y="37" width="94" height="32"/>
          {/* E2 */}
          <polygon opacity="0.70" style={sz(s-90, -1)} points="-221,-69 -311.4,-69 -311.2,-68.4 -312,-68.4 -312,69 -278,69 -278,-37 -221,-37"/>
          {/* B */}
          <path opacity="0.70" style={spin(s-120, 1)} d="M-74.6,-14h-28.7V-69H-135l0,138h60.4c22.8,0,41.3-18.8,41.3-41.7C-33.3,4.5,-51.8,-14,-74.6,-14z"/>
          {/* R */}
          <path opacity="0.70" style={_r(s-180)} d="M202.1,12c22.2,0,40.3-18.3,40.3-40.5c0-22.2-18-40.5-40.3-40.5H137v81H202.1z"/>
          {/* O */}
          <circle opacity="0.70" style={_o(s-210)} cx="339.7" cy="0" r="71"/>
        </g>

        <g fill="#6DA9B6">
          {/* E1 */}
          <polygon opacity="0.70" style={sz(s-60, 1)} points="-412,37 -412,-69 -446,-69 -446,69 -352,69 -352,37"/>
          {/* Y */}
          <polygon opacity="0.70" style={spin(s-150, -1)} points="71,-69 28,11 28,69 64,69 64,11 107,-69"/>
          {/* R */}
          <polygon opacity="0.70" style={_r2(s-190)} points="241.6,69 203.3,69 172.7,18.4 211,18.4"/>
          {/* N */}
          <polygon opacity="0.70" style={_n(s-240)} points="561.6,69 522.3,69 436.7,-69 475.9,-69"/>
        </g>

        <g opacity="0.55" fill="#262628">

          {/* L */}
          <rect style={v(s-15, r)} x="-562" y="-69" width="2.5" height="138"/>
          <rect style={v(s-18, r)} x="-554.6" y="-69" width="2.5" height="138"/>
          <rect style={v(s-21, r)} x="-547.1" y="-69" width="2.5" height="138"/>
          <rect style={v(s-24, r)} x="-539.7" y="-69" width="2.5" height="138"/>
          <rect style={v(s-27, r)} x="-532.2" y="-69" width="2.5" height="138"/>

          {/* E1 */}
          <rect style={h(s-50, r)} x="-446" y="-69" width="91" height="2.5"/>
          <rect style={h(s-53, r)} x="-446" y="-61.6" width="91" height="2.5"/>
          <rect style={h(s-56, r)} x="-446" y="-54.1" width="91" height="2.5"/>
          <rect style={h(s-59, r)} x="-446" y="-46.7" width="91" height="2.5"/>
          <rect style={h(s-62, r)} x="-446" y="-39.5" width="91" height="2.5"/>
          <rect style={h(s-70, r)} x="-446" y="-16.5" width="85" height="2.5"/>
          <rect style={h(s-73, r)} x="-446" y="-9.1" width="85" height="2.5"/>
          <rect style={h(s-76, r)} x="-446" y="-1.6" width="85" height="2.5"/>
          <rect style={h(s-79, r)} x="-446" y="5.8" width="85" height="2.5"/>
          <rect style={h(s-82, r)} x="-446" y="13.3" width="85" height="2.5"/>
          <rect style={h(s-90, r)} x="-446" y="37" width="94" height="2.5"/>
          <rect style={h(s-93, r)} x="-446" y="44.4" width="94" height="2.5"/>
          <rect style={h(s-96, r)} x="-446" y="51.9" width="94" height="2.5"/>
          <rect style={h(s-99, r)} x="-446" y="59.3" width="94" height="2.5"/>
          <rect style={h(s-102, r)} x="-446" y="66.5" width="94" height="2.5"/>

          {/* E2 */}
          <rect style={h(s-132, r)} x="-312" y="-69" width="91" height="2.5"/>
          <rect style={h(s-129, r)} x="-312" y="-61.6" width="91" height="2.5"/>
          <rect style={h(s-126, r)} x="-312" y="-54.1" width="91" height="2.5"/>
          <rect style={h(s-123, r)} x="-312" y="-46.7" width="91" height="2.5"/>
          <rect style={h(s-120, r)} x="-312" y="-39.5" width="91" height="2.5"/>
          <rect style={h(s-112, r)} x="-312" y="-16.5" width="85" height="2.5"/>
          <rect style={h(s-109, r)} x="-312" y="-9.1" width="85" height="2.5"/>
          <rect style={h(s-106, r)} x="-312" y="-1.6" width="85" height="2.5"/>
          <rect style={h(s-103, r)} x="-312" y="5.8" width="85" height="2.5"/>
          <rect style={h(s-100, r)} x="-312" y="13.3" width="85" height="2.5"/>
          <rect style={h(s-92, r)} x="-312" y="37" width="94" height="2.5"/>
          <rect style={h(s-89, r)} x="-312" y="44.4" width="94" height="2.5"/>
          <rect style={h(s-86, r)} x="-312" y="51.9" width="94" height="2.5"/>
          <rect style={h(s-83, r)} x="-312" y="59.3" width="94" height="2.5"/>
          <rect style={h(s-80, r)} x="-312" y="66.5" width="94" height="2.5"/>

          {/* B */}
          <rect style={v(s-110, r)} x="-113.1" y="-69" width="2.5" height="138"/>
          <rect style={v(s-113, r)} x="-120.6" y="-69" width="2.5" height="138"/>
          <rect style={v(s-116, r)} x="-128" y="-69" width="2.5" height="138"/>
          <rect style={v(s-119, r)} x="-135" y="-69" width="2.5" height="138"/>

          <rect style={v(s-122, r)} x="-105.9" y="-69" width="2.7" height="79.5"/>
          <rect style={v(s-125, r)} x="-98.1" y="-69" width="2.7" height="79.5"/>
          <rect style={v(s-128, r)} x="-90.3" y="-69" width="2.7" height="79.5"/>
          <path style={v(s-131, r)} d="M-80.9,-69h-1.6v79.5l1.6,0c0.4,0,0.7,0,1.1,0V-68.9C-80.1,-69,-80.4,-69,-80.9,-69z"/>
          <path style={v(s-134, r)} d="M-74.7,-68.4V10c0.9-0.1,1.8-0.3,2.7-0.5V-67.9C-73,-68.1,-73.8,-68.3,-74.7,-68.4z"/>
          <path style={v(s-137, r)} d="M-67,-66.4V8c0.9-0.3,1.8-0.7,2.7-1.1V-65.2C-65.2,-65.6,-66.1,-66,-67,-66.4z"/>
          <path style={v(s-140, r)} d="M-59.2,-62.4V4c0.9-0.6,1.8-1.2,2.7-1.9V-60.5C-57.4,-61.2,-58.3,-61.8,-59.2,-62.4z"/>
          <path style={v(s-143, r)} d="M-51.4,-55.7v53.1c0.9-1,1.8-2.1,2.7-3.3V-52.4C-49.6,-53.6,-50.5,-54.7,-51.4,-55.7z"/>
          <path style={v(s-147, r)} d="M-43.6,-42.8c1.6,4.3,2.4,8.8,2.4,13.6c0,4.8-0.8,9.4-2.4,13.6"/>

          {/* Y */}
          <polygon style={a(s-140, r)} points="31,11 -16.9,-69 -19.9,-69 28,11"/>
          <polygon style={a(s-144, r)} points="39.2,11 -8.7,-69 -11.7,-69 36.2,11"/>
          <polygon style={a(s-148, r)} points="47.5,11 -0.4,-69 -3.4,-69 44.5,11"/>
          <polygon style={a(s-152, r)} points="55.8,11 7.9,-69 4.9,-69 52.8,11"/>
          <polygon style={a(s-156, r)} points="64,11 16.1,-69 13.1,-69 61,11"/>

          {/* R */}
          <rect style={v(s-183, r)} x="137" y="-69" width="2.5" height="138"/>
          <rect style={v(s-187, r)} x="144.4" y="-69" width="2.5" height="138"/>
          <rect style={v(s-191, r)} x="151.9" y="-69" width="2.5" height="138"/>
          <rect style={v(s-195, r)} x="159.3" y="-69" width="2.5" height="138"/>
          <rect style={v(s-199, r)} x="166.8" y="-69" width="2.5" height="138"/>

          {/* O */}
          <path style={v(s-200, r)} d="M273.6,-26v52c0.8,1.9,1.6,3.8,2.5,5.6V-31.6C275.2,-29.8,274.4,-27.9,273.6,-26z"/>
          <path style={v(s-202, r)} d="M281,-39.9v79.9c0.8,1.2,1.6,2.3,2.5,3.4V-43.4C282.6,-42.2,281.8,-41.1,281,-39.9z"/>
          <path style={v(s-204, r)} d="M288.4,-49V49c0.8,0.9,1.6,1.7,2.5,2.5v-103C290,-50.7,289.2,-49.9,288.4,-49z"/>
          <path style={v(s-206, r)} d="M295.7,-55.7v111.5c0.8,0.6,1.7,1.3,2.5,1.9V-57.6C297.4,-57,296.6,-56.4,295.7,-55.7z"/>
          <path style={v(s-208, r)} d="M303.1,-60.9v121.7c0.8,0.5,1.7,1,2.5,1.4V-62.3C304.8,-61.8,303.9,-61.3,303.1,-60.9z"/>
          <path style={v(s-210, r)} d="M311.3,-65.1v130.1c0.8,0.4,1.7,0.7,2.5,1V-66.1C312.9,-65.8,312.1,-65.4,311.3,-65.1z"/>
          <path style={v(s-212, r)} d="M318.2,-67.7v135.4c0.8,0.3,1.7,0.5,2.5,0.7V-68.4C319.9,-68.2,319,-67.9,318.2,-67.7z"/>
          <path style={v(s-214, r)} d="M325.6,-69.6v139.2c0.8,0.2,1.7,0.3,2.5,0.4V-70C327.2,-69.9,326.4,-69.8,325.6,-69.6z"/>
          <path style={v(s-216, r)} d="M332.9,-70.7v141.3c0.8,0.1,1.7,0.1,2.5,0.2V-70.9C334.6,-70.8,333.8,-70.8,332.9,-70.7z"/>
          <path style={v(s-218, r)} d="M340.3,-71v142c0.8,0,1.7,0,2.5-0.1V-70.9C342,-71,341.2,-71,340.3,-71z"/>
          <path style={v(s-220, r)} d="M347.7,-70.5v141.1c0.8-0.1,1.7-0.2,2.5-0.3V-70.2C349.4,-70.3,348.5,-70.4,347.7,-70.5z"/>

          {/* N */}
          <rect style={v(s-233, r)} x="436.7" y="-69" width="2.5" height="138"/>
          <rect style={v(s-236, r)} x="443.7" y="-69" width="2.5" height="138"/>
          <rect style={v(s-239, r)} x="451.1" y="-69" width="2.5" height="138"/>
          <rect style={v(s-242, r)} x="458.5" y="-69" width="2.5" height="138"/>
          <rect style={v(s-245, r)} x="466" y="-69" width="2.5" height="138"/>
          <rect style={v(s-247, r)} x="473.4" y="-69" width="2.5" height="138"/>

          <rect style={v(s-253, r)} x="522.3" y="-69" width="2.5" height="138"/>
          <rect style={v(s-256, r)} x="529.3" y="-69" width="2.5" height="138"/>
          <rect style={v(s-259, r)} x="536.8" y="-69" width="2.5" height="138"/>
          <rect style={v(s-262, r)} x="544.2" y="-69" width="2.5" height="138"/>
          <rect style={v(s-265, r)} x="551.7" y="-69" width="2.5" height="138"/>
          <rect style={v(s-262, r)} x="559.1" y="-69" width="2.5" height="138"/>

        </g>
      </g>
    </svg>
  )
}

function useClientCenter(pageHeight: number): [ React.Ref<SVGSVGElement>, number ] {
  const ref = useRef<SVGSVGElement>(null)
  const [ center, setCenter ] = useState(pageHeight / 4)
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setCenter(window.scrollY + rect.top + rect.height)
    }
  }, [pageHeight])
  return [ ref, center ]
}

function t(s: string) {
  return {
    transform: s,
    WebkitTransform: s
  };
}

type PRNG = (min: number, max: number) => number

function prng(seed: number): PRNG {
  var x = seed || 1;
  return function(max, min) {
    x = (x * 279470273) % 4294967291;
    return min + (max - min) * (x / 0xFFFFFFFF);
  }
}

function h(s: number, r: PRNG) {
  if (s < 0) {
    s = 0;
  }
  var dx = s * r(-12, 12);
  var sx = Math.max(0, 1 + s * r(-0.05, -0.01));
  return t('translateX('+(dx-535)+'px) scaleX('+sx+') translateX(535px)');
}

function v(s: number, r: PRNG) {
  if (s < 0) {
    s = 0;
  }
  var dy = s * r(-6, 6);
  var sy = Math.max(0, 1 + s * r(-0.05, -0.01));
  return t('translateY('+dy+'px) scaleY('+sy+')');
}

function a(s: number, r: PRNG) {
  if (s < 0) {
    s = 0;
  }
  var dy = s * r(-5, 5);
  var sy = Math.max(0, 1 + s * r(-0.05, -0.01));
  return t('rotate(-30deg) translateY('+dy+'px) scaleY('+sy+') rotate(30deg)');
}


function _l(s: number) {
  if (s < 0) {
    s = 0;
  }
  var dx = s * -12;
  var sx = Math.max(0, 1 - (Math.max(0, s - 30) / 90));
  return t('translateX('+dx+'px) scaleX('+sx+')');
}

function _r(s: number) {
  if (s < 0) {
    s = 0;
  }
  var dx = s * 7;
  return t('translateX('+dx+'px)');
}


var D2R = Math.PI / 180;
var xd = Math.sin(D2R * 30);
var yd = Math.cos(D2R * 30);

function _n(s: number) {
  if (s < 0) {
    s = 0;
  }

  var d = -7;
  var x = s * d * xd;
  var y = s * d * yd;
  return t('translate('+x+'px,'+y+'px)');
}

function _r2(s: number) {
  if (s < 0) {
    s = 0;
  }

  var d = 6;
  var x = s * d * xd;
  var y = s * d * yd;
  var sy = Math.max(0, 1 - (Math.max(0, s - 30) / 90));
  return t('translate('+x+'px,'+y+'px) skewX(30deg) scaleY('+sy+') skewX(-30deg)');
}

function _o(s: number) {
  if (s < 0) {
    s = 0;
  }

  var dx = s * 0.4;
  var sc = 1 + s * 0.01;
  return t('scale('+sc+') translateX('+dx+'px) rotateX('+(s*0.3)+'deg)');
}


function sz(s: number, d: number) {
  if (s < 0) {
    s = 0;
  }

  var dx = s * -3;
  var sc = 1 + s * 0.01;
  var az = 0.1 * d * s;
  var ay = -Math.min(90, Math.max(0, s - 30) * 0.6);
  return t('rotate('+az+'deg) scale('+sc+') translateX('+dx+'px) rotateY('+ay+'deg)');
}


function spin(s: number, d: number) {
  if (s < 0) {
    s = 0;
  }

  var dy = s * d * 0.3;
  var az = s * 0.15;
  return t('scale('+(1+s*0.003)+') translateX('+(-2*s*d)+'px) translateY('+(-dy)+'px) rotate('+az+'deg) translateY('+dy+'px)');
}
