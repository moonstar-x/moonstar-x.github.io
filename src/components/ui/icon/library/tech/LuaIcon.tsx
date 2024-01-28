import React, { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {

}

export const LuaIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="m.38 10.377-.272-.037c-.048.344-.082.695-.101 1.041l.275.016c.018-.34.051-.682.098-1.02zm3.756-7.088-.184-.205c-.258.232-.509.48-.746.734l.202.188c.231-.248.476-.49.728-.717zm1.633-1.23-.146-.235c-.296.186-.586.385-.863.594l.166.219c.27-.203.554-.399.843-.578zm-3.945 16.31c.185.297.384.586.593.863l.22-.164a11.668 11.668 0 0 1-.58-.844l-.233.145zm-.697-1.967-.255.104c.129.318.274.635.431.943l.005.01.245-.125-.005-.01a11.931 11.931 0 0 1-.421-.922zM.298 9.309l.269.063c.076-.332.168-.664.272-.986l-.261-.087c-.108.332-.202.672-.28 1.01zM.274 12.42l-.275.01c.012.348.04.699.083 1.043l.273-.033c-.042-.336-.069-.68-.081-1.02zm-.018 2.086c.073.34.162.682.264 1.014l.263-.08c-.1-.326-.187-.658-.258-.99l-.269.056zM11.573.275 11.563 0c-.348.012-.699.039-1.044.082l.034.273c.338-.041.68-.068 1.02-.08zm11.648 8.291c.1.326.186.66.256.992l.27-.059c-.072-.34-.16-.682-.262-1.014l-.264.081zm-5.6-7.177a11.849 11.849 0 0 0-.947-.449l-.107.252c.314.133.625.281.926.439l.128-.242zM15.693.572c-.332-.105-.67-.199-1.01-.277l-.063.268c.332.076.664.168.988.273l.085-.264zm-9.019.973c.298-.15.606-.291.916-.418L7.486.873c-.317.127-.632.272-.937.428l-.015.008.125.244.015-.008zm17.053 10.043.275-.01a11.797 11.797 0 0 0-.082-1.045l-.273.033c.041.338.068.682.08 1.022zM13.654.105c-.346-.047-.696-.08-1.043-.098l-.014.273c.339.018.683.051 1.019.098l.038-.273zm-4.11.422-.058-.27c-.34.072-.681.16-1.014.264l.081.262c.325-.099.659-.185.991-.256zM1.921 5.469l.231.15c.185-.285.384-.566.592-.834l-.217-.17c-.213.276-.417.563-.606.854zM.943 7.318l.253.107c.132-.313.28-.625.439-.924l-.243-.128c-.163.307-.314.625-.449.945zm17.28 14.625.145.234c.295-.186.586-.385.863-.594l-.164-.219c-.272.204-.557.4-.844.579zm3.025-2.724.217.17c.215-.273.418-.561.607-.854l-.23-.148c-.186.285-.385.564-.594.832zm-1.393 1.496.184.203c.258-.23.51-.479.746-.732l-.201-.188c-.23.248-.477.488-.729.717zm2.504-3.211.244.129c.162-.307.314-.625.449-.945l-.254-.107a11.27 11.27 0 0 1-.439.923zm1.258-3.875.273.039c.049-.346.082-.695.102-1.043l-.275-.014a11.24 11.24 0 0 1-.1 1.018zm-.461 1.992.264.086c.107-.332.201-.67.279-1.01l-.268-.063c-.077.333-.169.665-.275.987zm-.703-8.949c.154.303.297.617.424.932l.256-.104a12.027 12.027 0 0 0-.436-.953l-.244.125zM8.296 23.418c.331.107.67.201 1.009.279l.062-.268a11.604 11.604 0 0 1-.986-.273l-.085.262zm2.039.471c.345.049.696.082 1.043.102l.014-.275a12.027 12.027 0 0 1-1.019-.098l-.038.271zm6.991-1.44c-.303.154-.613.297-.926.424l.104.256c.318-.131.639-.275.947-.434l.004-.002-.123-.246-.006.002zm-12.713-.982c.274.213.562.418.854.605l.149-.23a12.18 12.18 0 0 1-.833-.592l-.17.217zm7.804 2.258.009.275a12.61 12.61 0 0 0 1.045-.084l-.035-.271c-.336.041-.68.068-1.019.08zM6.37 22.604c.307.162.625.314.946.449l.107-.254a11.646 11.646 0 0 1-.924-.439l-.129.244zm-3.287-2.563c.233.258.48.51.734.746l.188-.201c-.249-.23-.49-.477-.717-.729l-.205.184zm11.362 3.434.059.27a12 12 0 0 0 1.014-.266l-.082-.262c-.325.099-.659.185-.991.258zM21.18.129a2.689 2.689 0 1 0 0 5.378 2.689 2.689 0 1 0 0-5.378zm-5.856 15.318c0 .471.314.66.852.66.67 0 1.297-.396 1.297-1.016v-.645c-.23.107-.379.141-1.107.24-.735.109-1.042.306-1.042.761zM12 2.818a9.18 9.18 0 0 0-9.18 9.18A9.18 9.18 0 1 0 12 2.818zm-2.487 13.77H5.771v-6.023h.769v5.346h2.974v.677zm4.13 0h-.619v-.67c-.405.57-.811.793-1.446.793-.843 0-1.38-.463-1.38-1.182v-3.271h.686v3c0 .52.347.85.893.85.719 0 1.181-.578 1.181-1.461v-2.389h.686v4.33zm-.53-8.393a2.69 2.69 0 1 1 5.375.001 2.69 2.69 0 0 1-5.375-.001zm5.567 7.856v.52c-.223.059-.33.074-.471.074a.73.73 0 0 1-.711-.57 2.025 2.025 0 0 1-1.471.637c-.877 0-1.422-.463-1.422-1.248 0-.527.256-.916.76-1.123.266-.107.414-.141 1.389-.264.545-.066.719-.191.719-.48v-.182c0-.412-.348-.645-.967-.645-.645 0-.957.24-1.016.77h-.693c.041-1 .686-1.404 1.734-1.404 1.066 0 1.627.412 1.627 1.182v2.412c0 .215.133.338.373.338.041-.002.074-.002.149-.017z" />
    </svg>
  );
};
