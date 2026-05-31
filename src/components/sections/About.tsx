cat > src/components/sections/About.tsx <<'EOF'
export default function About() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-industrial-blue mb-8 text-center">
        关于我们
      </h2>

      <div className="text-gray-700 leading-8 space-y-6 text-lg">
        <p>
          我们专注于工业吸油绵、吸油棉片、围油栏、吸油条等环保应急产品，
          为制造业、物流仓储、港口码头、汽车维修、机械加工、石油化工等行业
          提供工业泄漏控制与应急处理解决方案。
        </p>

        <p>
          产品可快速吸附润滑油、液压油、柴油、机油等油类污染物，
          帮助企业降低设备故障风险，减少环境污染事故，
          提升现场安全管理水平并满足环保合规要求。
        </p>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-industrial-blue">
            应用案例
          </h3>

          <ul className="space-y-4 list-disc pl-6">
            <li>
              <strong>汽车制造车间：</strong>
              在设备液压系统维护过程中，利用吸油棉片快速处理地面油污，
              防止员工滑倒并缩短停线清理时间。
            </li>

            <li>
              <strong>港口码头作业区：</strong>
              在装卸设备发生燃油泄漏时，
              使用围油栏控制污染扩散范围，
              降低对周边水域环境的影响。
            </li>

            <li>
              <strong>机械加工企业：</strong>
              在机床和数控设备周边铺设吸油垫，
              持续吸附滴漏润滑油，
              保持生产区域整洁并减少维护成本。
            </li>

            <li>
              <strong>物流仓储中心：</strong>
              针对叉车液压油泄漏等突发情况，
              快速部署吸油条和吸油绵，
              提高现场应急处理效率。
            </li>

            <li>
              <strong>石油化工现场：</strong>
              配合应急物资储备方案，
              用于储罐区、输油管线及设备检修区域的泄漏控制与吸附处理。
            </li>
          </ul>
        </div>

        <p>
          我们坚持以高品质产品和专业服务为核心，
          为客户提供从产品选型、应急储备到现场应用的全流程支持，
          助力企业实现安全生产与绿色发展目标。
        </p>
      </div>
    </section>
  );
}
EOF
