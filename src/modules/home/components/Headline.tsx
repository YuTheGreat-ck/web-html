import { Button } from "antd";

export default function Headline() {
  return (
    <section id="home" className="w-full bg-[#F4F7FC] px-6 pt-8 pb-24">
      {/* 容器：使用了 flex-col 实现中心化对齐 */}
      <div className="relative rounded-3xl flex flex-col items-center text-center py-20 bg-white/50 border border-white shadow-sm overflow-hidden">
        
        {/* 主标题：使用 h1 确立页面权重 */}
        <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-neutral-900 mb-6 px-4">
          工业泄漏，瞬时解决 <br />
          <span className="text-blue-600">专业吸油绵，企业环保首选</span>
        </h1>

        {/* 副标题 */}
        <p className="text-neutral-600 text-base md:text-lg max-w-2xl mb-10 px-6 leading-relaxed">
          高性能工业吸油材料，超强吸附能力，拒绝二次污染。
          助力工厂车间实现快速清理，提升作业安全性，符合环保合规要求。
        </p>

        {/* 核心动作按钮 */}
        <Button
          size="large"
          className="h-auto px-10 py-4 border-2 border-black rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-all"
        >
          申请免费试样
        </Button>

        {/* 底部核心指标卡片：适配桌面端布局 */}
        <div className="hidden lg:flex absolute -bottom-16 w-full max-w-5xl px-10">
          <div className="flex items-center justify-between w-full bg-white rounded-2xl p-8 shadow-xl border border-neutral-100">
            {[
              { title: "20倍吸附量", desc: "高效处理溢出油污" },
              { title: "环保材质", desc: "方便回收与处置" },
              { title: "快速清理", desc: "大幅提升车间效率" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-bold text-xl text-neutral-900">{item.title}</span>
                  <span className="text-neutral-500 text-sm">{item.desc}</span>
                </div>
                {idx < 2 && <div className="h-10 w-px bg-neutral-200" />}
              </div>
            ))}
            
            <Button
              type="primary"
              size="large"
              className="bg-blue-600 rounded-xl px-10 py-6 text-white font-medium text-base hover:bg-blue-700 ml-4"
            >
              联系销售报价
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
