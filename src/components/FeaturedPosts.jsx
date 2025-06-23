import React from 'react';

const FeaturedPosts = () => {
  return (
    <section className="py-16 relative" style={{ background: 'var(--color-background)' }}>
      {/* Decorative Gradient Accent */}
      <div className="absolute inset-0 pointer-events-none" style={{background: 'linear-gradient(135deg, rgba(123,63,0,0.08) 0%, rgba(217,160,102,0.08) 100%)'}}></div>
      <div className="relative max-w-3xl mx-auto px-4 text-center">
        {/* Accent line */}
        <div className="mx-auto mb-6 w-16 h-1 rounded-full bg-accent opacity-70"></div>
        <h2 className="text-3xl font-bold mb-6 font-display" style={{ color: 'var(--color-text)' }}>
            ခွက်တစ်ခွက်၏ နောက်ကွယ်မှ ဇာတ်လမ်း- ကော်ဖီသမိုင်းကို လေ့လာခြင်
        </h2>
        {/* Highlighted quote */}
        <blockquote className="italic text-lg font-medium mb-6 px-4 py-2 rounded bg-accent/10 border-l-4 border-accent text-accent">
          "ကော်ဖီ၏ သမိုင်းကြောင်းသည် ရာစုနှစ်ပေါင်းများစွာနှင့် တိုက်ကြီးများစွာကို ဖြတ်သန်းလာခဲ့သည့် ဒဏ္ဍာရီများနှင့် ကမ္ဘာ့ကုန်သွယ်မှုများနှင့် ဆက်စပ်နေပါသည်။"
        </blockquote>
        <p className="mb-4 text-lg opacity-90" style={{ color: 'var(--color-text)' }}>
        ကော်ဖီ၏ ခရီးလမ်းသည် အီသီယိုးပီးယားကုန်းမြင့်ရှိ ရှေးဟောင်း ကော်ဖီတောများ၊ အထူးသဖြင့် ကဖ်ဖာဒေသ (ကော်ဖီဟူသော စကားလုံးပင် ထွက်လာနိုင်သည်) မှ စတင်ခဲ့သည်ဟု ယုံကြည်ရသည်။ အကျော်ကြားဆုံး ဒဏ္ဍာရီမှာ ဆိတ်ကျောင်းသား ကယ်လ်ဒီ အကြောင်းဖြစ်ပြီး၊ သူ၏ဆိတ်များသည် သစ်ပင်တစ်ပင်မှ အနီရောင်အသီးများကို စားပြီးနောက် ပုံမှန်မဟုတ်ဘဲ တက်ကြွလာကာ "ကခုန်" နေသည်ကို သတိပြုမိခဲ့သည်။
        </p>
        <p className="mb-4 text-base opacity-80" style={{ color: 'var(--color-text)' }}>
        သူသည် ဤအကြောင်းကို ဒေသခံ ဘုန်းကြီးကျောင်းမှ ဘုန်းတော်ကြီးတစ်ပါးအား တင်ပြခဲ့ရာ၊ ဘုန်းတော်ကြီးက အစပိုင်းတွင် ထိုအသီးများကို နတ်ဆိုး၏လက်ရာအဖြစ် ပယ်ချပြီး မီးထဲသို့ ပစ်ချခဲ့သည်။ 
        </p>
        <p className="mb-4 text-base opacity-80" style={{ color: 'var(--color-text)' }}>
        သို့သော် လှော်ထားသော အစေ့များမှ ထွက်လာသော မွှေးကြိုင်သောရနံ့သည် ဘုန်းတော်ကြီးများကို မီးဖိုထဲမှ ဆယ်ယူကာ ကြိတ်ခွဲပြီး ရေနွေးနှင့် ရောစပ်ကာ ကမ္ဘာပေါ်တွင် ပထမဆုံးသော ကော်ဖီကို ဖန်တီးခဲ့သည်။ 
        </p>
        {/* <p className="text-base opacity-80" style={{ color: 'var(--color-text)' }}>
          ၁၈ရာစုတွင် ကော်ဖီကို ကော်လံနီနယ်မြေများသို့ ဖြန့်ချိလာကြပြီး အမေရိကန်၊ ဘရာဇီး၊ ဗီယက်နမ် စသည့် နိုင်ငံများသည် ကမ္ဘာ့အကြီးဆုံးထုတ်လုပ်သူများဖြစ်လာခဲ့သည်။
        </p> */}
      </div>
      
    </section>
  );
};

export default FeaturedPosts; 