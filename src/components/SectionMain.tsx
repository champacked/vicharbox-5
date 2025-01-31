
export default function SectionMain()  {
 
      return (
        <div className="flex flex-wrap justify-center items-center gap-8 p-8 bg-white">
          {/* React */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#61DAFB" d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046z" />
           
          </svg>
    
          {/* TypeScript */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#007ACC" d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
          </svg>
    
          {/* Prisma */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#2D3748" d="M21.807 18.285L13.553.756a1.324 1.324 0 00-1.129-.754 1.32 1.32 0 00-1.206.626l-8.952 14.5a1.323 1.323 0 00.045 1.43l4.376 6.208a1.33 1.33 0 001.914.307l12.938-9.035a1.323 1.323 0 00.268-1.753zm-1.446.743L9.18 27.017c-.55.384-1.3.25-1.674-.303l-4.12-5.841a.887.887 0 01-.031-.958L12.04 6.812c.326-.56 1.063-.753 1.613-.416l8.25 5.765a.885.885 0 01.315 1.163l-1.857 4.704z" />
          </svg>
    
          {/* PostgreSQL */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#336791" d="M17.128 0a10.134 10.134 0 00-2.755.403l-.063.02A10.922 10.922 0 0012.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879s.69 2.783 1.193 4.152c.503 1.37 1.054 2.6 1.915 3.436.43.419 1.022.771 1.72.742.49-.02.933-.235 1.315-.552.186.245.385.352.566.451.228.125.45.21.68.266.413.103 1.12.241 1.948.1.282-.047.579-.139.875-.27.011.33.024.653.037.98.041 1.036.067 1.993.378 2.832.05.137.187.843.727 1.466.54.624 1.598 1.013 2.803.755.85-.182 1.931-.51 2.649-1.532.71-1.01 1.03-2.459 1.093-4.809.016-.127.035-.235.055-.336l.169.015h.02c.907.041 1.891-.088 2.713-.47.728-.337 1.279-.678 1.68-1.283.1-.15.21-.331.24-.643s-.149-.8-.446-1.025c-.595-.452-.969-.28-1.37-.197a6.27 6.27 0 01-1.202.146c1.156-1.947 1.985-4.015 2.458-5.845.28-1.08.437-2.076.45-2.947.013-.871-.058-1.642-.58-2.309C21.36.6 19.067.024 17.293.004c-.055-.001-.11-.002-.165-.001zm-.047.64c1.678-.016 3.822.455 5.361 2.422.346.442.449 1.088.437 1.884-.013.795-.16 1.747-.429 2.79-.522 2.02-1.508 4.375-2.897 6.488a.756.756 0 00.158.086c.29.12.951.223 2.27-.048.332-.07.575-.117.827.075a.52.52 0 01.183.425.704.704 0 01-.13.336c-.255.383-.758.746-1.403 1.045-.571.266-1.39.405-2.116.413-.364.004-.7-.024-.985-.113l-.018-.007c-.11 1.06-.363 3.153-.528 4.108-.132.77-.363 1.382-.804 1.84-.44.458-1.063.734-1.901.914-1.038.223-1.795-.017-2.283-.428-.487-.41-.71-.954-.844-1.287-.092-.23-.14-.528-.186-.926-.046-.398-.08-.885-.103-1.434a51.426 51.426 0 01-.03-2.523 3.061 3.061 0 01-1.552.76c-.689.117-1.304.002-1.671-.09a2.276 2.276 0 01-.52-.201c-.17-.091-.332-.194-.44-.397a.56.56 0 01-.057-.381.61.61 0 01.218-.331c.198-.161.46-.251.855-.333.719-.148.97-.249 1.123-.37.13-.104.277-.314.537-.622a1.16 1.16 0 01-.003-.041 2.96 2.96 0 01-1.33-1.244c-.466-.998-.576-1.288-1.156-3.527-.29-1.126-.28-1.489-.232-1.917.127-1.152.89-1.821 1.708-1.891.786-.067 1.748.45 2.01 1.087.085.206.154.46.202.712l.055.17c.232.773.265 1.15.503 3.311.053.49.1.794.194 1.143.118.439.17.512.414.811a.625.625 0 00.098.097l.008-.009c.192-.21.43-.419.645-.58.534-.4.682-.651 1.35-2.3.403-.998.658-2.01.861-3.022.252-1.252.262-1.524.288-2.643.017-.72-.013-1.079-.078-1.45-.178-1.023-1.13-1.723-2.342-1.734-.87-.008-1.78.347-2.236.867-.094.109-.26.367-.296.674-.04.333.034.679.115 1.04l.066.284c.065.293.099.607.133.92.067.636.04.914-.175 1.855-.149.655-.516 1.896-.786 2.658a4.46 4.46 0 01-.25.654c-.115.253-.254.423-.53.626-.08.06-.162.123-.288.203-.425.274-.656.372-1.702.729-.423.144-.746.26-.934.346a9.632 9.632 0 01-1.487.52c-.864.24-1.318.297-2.225.278a2.606 2.606 0 01-1.14-.253c-.548-.26-.855-.715-.913-1.306a1.467 1.467 0 01.144-.858c.16-.302.434-.515.805-.626.537-.16 1.2-.138 1.982.062.948.243 1.811.062 2.453-.515.358-.32.575-.837.582-1.388.002-.145-.015-.286-.044-.412-.175-.778-.896-1.373-1.862-1.53-.70469-.13848-1.38858-.11334-2.06647.08023A3.89195 3.89195 0 002.9982 8.49c-.2.215-.347.41-.438.615-.16.362-.202.84-.094 1.257.09.355.254.648.477.883.076.08.16.16.247.235.15.128.252.205.334.252.137.079.263.135.403.18.444.14.928.092 1.398-.136.47-.232.845-.597 1.095-1.058.049-.09.093-.183.13-.273a1.78 1.78 0 00.104-.47c.017-.16.005-.29-.031-.385-.071-.18-.256-.328-.515-.417-.133-.045-.274-.068-.42-.068a1.41 1.41 0 00-.491.088 1.26 1.26 0 00-.49.284.912.912 0 00-.235.413 1.043 1.043 0 00.01.443c.035.147.098.273.183.38.065.08.143.148.232.2a.918.918 0 00.290.098.822.822 0 00.324-.016.975.975 0 00.293-.134.997.997 0 00.201-.212c.05-.072.088-.153.112-.238a.825.825 0 00.03-.235.665.665 0 00-.042-.237c-.03-.075-.076-.136-.134-.175a.526.526 0 00-.226-.098.676.676 0 00-.207-.009" />
          </svg>
    
          {/* Cloudflare */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#F38020" d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.5986-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 01-.1333-.0713c-.0283-.042-.0351-.0908-.0205-.1377.0147-.0469.0493-.085.0938-.1025l.2886-.1172a8.5993 8.5993 0 01-.1772-1.7256c0-4.7707 3.8887-8.6387 8.6904-8.6387 4.5908 0 8.3413 3.5703 8.6475 8.0713l.3838.0283c.4209.0313.7754.2022 1.0146.4883.2392.2861.3428.6504.2978 1.0449-.0537.4707-.3721.8477-.8594 1.0195l-.0352.0127H16.5088zm-10.4151.9h11.3613c.4532 0 .8203.3662.8203.8184 0 .4521-.3671.8183-.8203.8183H6.0937c-.4531 0-.8203-.3662-.8203-.8183 0-.4522.3672-.8184.8203-.8184z" />
          </svg>
    
          {/* Hono */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#00E5EE" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zm4.364 7.636h-2.182v2.182h2.182v2.182h-2.182v2.182H12v-2.182H9.818v2.182H7.636v-2.182h2.182v-2.182H7.636V9.818h2.182V7.636H12v2.182h2.182V7.636h2.182v2.182z" />
          </svg>
    
          {/* Git */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
          </svg>
    
          {/* NeonDB */}
          <svg viewBox="0 0 24 24" className="w-12 h-12">
            <path fill="#00E699" d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zm4.364 7.636h-2.182v2.182h2.182v2.182h-2.182v2.182H12v-2.182H9.818v2.182H7.636v-2.182h2.182v-2.182H7.636V9.818h2.182V7.636H12v2.182h2.182V7.636h2.182v2.182z" />
          </svg>
        </div>
     
    
    
    
  );
}


