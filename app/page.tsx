import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-300 font-sans selection:bg-blue-500 selection:text-white antialiased">
      
      {/* 背景の装飾（グラデーションの光） */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-blue-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* ヒーローセクション */}
      <header className="relative max-w-4xl mx-auto pt-28 px-6 pb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-semibold tracking-wide mb-6">
          ✨ Web Developer Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Kang Chimyong</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-400 font-medium">
          Full-Stack Web Developer / Engineer
        </p>
        <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl">
          大学で電気電子・通信系の研究を行う傍ら、Webアプリケーションの個人開発を行っています。
          フロントエンドからバックエンド、データベース、Firebaseを用いたサーバーレス開発まで、
          「小さく作って、素早く価値を届ける」モダンなものづくりが得意です。
        </p>
      </header>

      <main className="relative max-w-4xl mx-auto px-6 pb-24 space-y-20">
        
        {/* スキルセクション */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-2xl font-bold text-white">Technical Skills</h2>
            <span className="text-sm text-slate-500 font-medium">技術スタック</span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* フロントエンド */}
            <div className="bg-[#151f32] border border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-4">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-[#0b1120] border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-blue-500/50 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* バックエンド & データベース */}
            <div className="bg-[#151f32] border border-slate-800/80 rounded-xl p-6 shadow-xl backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">Back-end & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MySQL', 'Firebase Auth', 'Firebase Realtime DB'].map((skill) => (
                  <span key={skill} className="bg-[#0b1120] border border-slate-800 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-emerald-500/50 transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
            <span className="text-sm text-slate-500 font-medium">制作実績</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8">
            
            {/* プロジェクト：勤怠管理アプリ（ホバーで浮き出る＆枠が光る） */}
            <div className="group bg-[#151f32] border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 md:grid-cols-3">
              
              {/* 左側：プロジェクトの概要（2カラム分） */}
              <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-full">
                      Web Application
                    </span>
                    <span className="text-xs font-medium text-slate-500">2025年12月 制作</span>
                  </div>
                  
                  <h3 className="mt-4 text-xl font-bold text-white md:text-2xl group-hover:text-blue-400 transition-colors duration-300">
                    パート・アルバイト出退勤管理アプリケーション
                  </h3>
                  
                  <p className="mt-3 text-sm md:text-base text-slate-400 leading-relaxed">
                    現場での使いやすさとリアルタイム性を重視した、店舗向けの勤怠管理システム（プロトタイプ）です。
                    従業員のプロフィール管理をはじめ、日々の打刻データを遅延なく記録・集計できるタイムカード機能を実装しました。
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-200">💡 開発のポイント・こだわり</h4>
                    <ul className="mt-2 text-sm text-slate-400 space-y-1.5 list-disc list-inside">
                      <li>直感的で押し間違いのないタイムカードUIのデザイン</li>
                      <li>ユーザー認証（Authentication）による安全なマイページ管理</li>
                      <li>Firebaseを活用し、打刻データをサーバーレスかつリアルタイムに同期・保存</li>
                    </ul>
                  </div>
                </div>

                {/* 技術スタックバッジ */}
                <div className="mt-8">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Used Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Firebase'].map((tech) => (
                      <span key={tech} className="bg-[#0b1120] border border-slate-800 text-slate-400 px-2.5 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右側：補足情報 */}
              <div className="bg-[#101726] p-6 md:p-8 border-t md:border-t-0 md:border-l border-slate-800/80 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">Architecture</span>
                    <span className="text-sm font-medium text-slate-300">Serverless (BaaS)</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-500 uppercase">Database</span>
                    <span className="text-sm font-medium text-slate-300">NoSQL / Realtime Sync</span>
                  </div>
                </div>

                <div className="mt-8 md:mt-0">
                  <div className="text-xs text-slate-500 bg-[#151f32] border border-slate-800 rounded-lg p-3 text-center">
                    🔒 ソースコード・デモはプロトタイプとして非公開に設定しています
                  </div>
                </div>
              </div>

            </div>

            {/* 今後の展望カード */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-emerald-600/5 border border-blue-500/20 rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-xl">
              <div className="max-w-xl relative z-10">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Next Challenge</span>
                <h3 className="text-xl font-bold text-white mt-2">個人開発でのサービスローンチへ</h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  現在は、今回構築した Next.js × Tailwind CSS のモダンな環境をベースに、
                  広告収入やサブスクリプション課金（Stripe連携）を組み込んだ、実用的なマイクロSaaSアプリを企画・開発中です。
                </p>
              </div>
              <div className="mt-6 md:mt-0 relative z-10 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-300 shadow-lg shadow-blue-500/20 whitespace-nowrap cursor-default">
                🚀 開発進行中
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-900 bg-[#070c17] py-8 text-center text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Kang Chimyong. All rights reserved.</p>
      </footer>

    </div>
  )
}