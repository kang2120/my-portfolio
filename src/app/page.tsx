import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      
      {/* ヒーローセクション（トップの自己紹介） */}
      <header className="max-w-4xl mx-auto pt-24 px-6 pb-16 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold tracking-wide mb-6">
          ✨ Web Developer Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight">
          Hi, I'm <span className="text-blue-600">Jiming Jiang</span>
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-slate-600 font-medium">
          Full-Stack Web Developer / Engineer
        </p>
        <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
          大学で電気電子・通信系の研究を行う傍ら、Webアプリケーションの個人開発を行っていました。
          フロントエンドからバックエンド、データベース、Firebaseを用いたサーバーレス開発まで、
          「小さく作って、素早く価値を届ける」モダンなものづくりが得意です。
        </p>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-20">
        
        {/* スキルセクション */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-2xl font-bold text-slate-950">Technical Skills</h2>
            <span className="text-sm text-slate-400 font-medium">技術スタック</span>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* フロントエンド */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">Front-end</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* バックエンド & データベース */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-emerald-600 uppercase tracking-wider mb-3">Back-end & Database</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Express', 'MySQL', 'Firebase Auth', 'Firebase Realtime DB'].map((skill) => (
                  <span key={skill} className="bg-slate-50 border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section>
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h2 className="text-2xl font-bold text-slate-950">Featured Projects</h2>
            <span className="text-sm text-slate-400 font-medium">制作実績</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8">
            
            {/* プロジェクト：勤怠管理アプリ */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 md:grid-cols-3">
              
              {/* 左側：プロジェクトの概要・特徴（2カラム分） */}
              <div className="p-6 md:p-8 md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                      Web Application
                    </span>
                    <span className="text-xs font-medium text-slate-400">2025年12月 制作</span>
                  </div>
                  
                  <h3 className="mt-4 text-xl font-bold text-slate-950 md:text-2xl">
                    パート・アルバイト出退勤管理アプリケーション
                  </h3>
                  
                  <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                    現場での使いやすさとリアルタイム性を重視した、店舗向けの勤怠管理システム（プロトタイプ）です。
                    従業員のプロフィール管理をはじめ、日々の打刻データを遅延なく記録・集計できるタイムカード機能を実装しました。
                  </p>

                  {/* こだわったポイント */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-slate-900">💡 開発のポイント・こだわり</h4>
                    <ul className="mt-2 text-sm text-slate-600 space-y-1.5 list-disc list-inside">
                      <li>直感的で押し間違いのないタイムカードUIのデザイン</li>
                      <li>ユーザー認証（Authentication）による安全なマイページ管理</li>
                      <li>Firebaseを活用し、打刻データをサーバーレスかつリアルタイムに同期・保存</li>
                    </ul>
                  </div>
                </div>

                {/* 技術スタックバッジ */}
                <div className="mt-8">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Used Technologies</h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['HTML5', 'CSS3', 'JavaScript', 'Firebase'].map((tech) => (
                      <span key={tech} className="bg-slate-50 border border-slate-200 text-slate-700 px-2.5 py-1 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 右側：補足情報やステータス（1カラム分） */}
              <div className="bg-slate-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-slate-200 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Architecture</span>
                    <span className="text-sm font-medium text-slate-700">Serverless (BaaS)</span>
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-400 uppercase">Database</span>
                    <span className="text-sm font-medium text-slate-700">NoSQL / Realtime Sync</span>
                  </div>
                </div>

                <div className="mt-8 md:mt-0">
                  <div className="text-xs text-slate-400 bg-white border border-slate-200 rounded-lg p-3 text-center">
                    🔒 ソースコード・デモは学内/学外向けのプロトタイプとして非公開に設定しています
                  </div>
                </div>
              </div>

            </div>

            {/* 今後の展望カード（副業アプリへの布石） */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-md">
              <div className="max-w-xl">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Next Challenge</span>
                <h3 className="text-xl font-bold text-white mt-2">個人開発でのサービスローンチへ</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  現在は、今回構築した Next.js × Tailwind CSS のモダンな環境をベースに、
                  広告収入やサブスクリプション課金（Stripe連携）を組み込んだ、実用的なマイクロSaaSアプリを企画・開発中です。
                </p>
              </div>
              <div className="mt-6 md:mt-0 bg-slate-800 text-slate-300 px-5 py-2.5 rounded-xl text-sm border border-slate-700 font-medium whitespace-nowrap">
                🚀 開発進行中
              </div>
            </div>

          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Jiming Jiang. All rights reserved.</p>
      </footer>

    </div>
  )
}