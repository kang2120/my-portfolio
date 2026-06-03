import React from 'react'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#090d16] text-slate-300 font-sans selection:bg-blue-600 selection:text-white antialiased">
      
      {/* 上部の繊細なアクセントライン */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      {/* メインコンテナ */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28 space-y-24">
        
        {/* ヒーロー（プロフィール）セクション */}
        <header className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/5 border border-blue-500/10 text-blue-400 rounded-md text-xs font-medium tracking-wider uppercase">
            Systems Engineer / Developer
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Kang Chimyong
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed">
            システムインテグレーションおよびWebアプリケーション開発に従事。
            堅牢なバックエンドアーキテクチャから、直感的なフロントエンドUIの構築、Firebaseを用いたサーバーレス開発まで一気通貫での実装を強みとしています。
          </p>

          <p className="text-sm md:text-base text-slate-500 leading-relaxed">
            2026年3月に京都大学を卒業。現在はシステムエンジニアとして業務に携わる傍ら、モダンな技術スタックを用いた個人開発・マイクロSaaSの企画開発に取り組み、実用性とコードの美しさを追求しています。
          </p>
        </header>

        {/* 技術スタック（無駄な枠を無くし、より知的なグリッドデザインへ） */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-3">
            <h2 className="text-xl font-semibold text-white tracking-wide">Technical Expertise</h2>
            <div className="h-[1px] flex-1 bg-slate-800/40" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Front-end */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest">Front-end Development</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                TypeScript / Next.js / React / Tailwind CSS を中心としたコンポーネント指向の開発。レスポンシブ対応やパフォーマンスを意識した設計が可能です。
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Next.js', 'React', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Back-end & Infrastructure */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Back-end & Infrastructure</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Node.js (Express) によるAPI構築、MySQLを用いたリレーショナルデータベース設計。Firebaseを活用したリアルタイム同期システムの実装経験があります。
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['Node.js', 'Express', 'MySQL', 'Firebase Auth', 'Firebase Realtime DB'].map((tech) => (
                  <span key={tech} className="bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* プロジェクト実績（文字の羅列ではなく、職人のポートフォリオのようなレイアウト） */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-3">
            <h2 className="text-xl font-semibold text-white tracking-wide">Selected Projects</h2>
            <div className="h-[1px] flex-1 bg-slate-800/40" />
          </div>

          <div className="space-y-12">
            {/* 勤怠管理アプリ */}
            <div className="group relative grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
              {/* 左側：メタ情報 */}
              <div className="md:col-span-1 space-y-1">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Project 01</span>
                <span className="block text-sm font-semibold text-slate-300">勤怠管理アプリ</span>
                <span className="block text-xs text-slate-500">2025.12 / 開発期間: 約2週間</span>
              </div>
              
              {/* 右側：詳細内容 */}
              <div className="md:col-span-3 space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed">
                  現場のオペレーション負荷軽減を目的とした、店舗向けのリアルタイム出退勤管理システム。
                  直感的な打刻UIに加え、Firebaseを活用したサーバーレス構成により、データの即時同期と安全な認証基盤を両立させました。
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-slate-900/50 border border-slate-800/40 rounded-lg p-4">
                  <div>
                    <span className="block font-semibold text-slate-400">💡 課題解決と実装</span>
                    <p className="mt-1 text-slate-500 leading-relaxed">押し間違いを防ぐ打刻UI。NoSQLによる柔軟なデータ設計と高速な同期処理。</p>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-400">🛠️ 使用技術スタック</span>
                    <p className="mt-1 text-slate-500 leading-relaxed">HTML5 / CSS3 / JavaScript / Firebase Realtime DB / Firebase Auth</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 今後の展望セクションを、より洗練された「ステートメント」に変更 */}
            <div className="border border-slate-800/60 bg-gradient-to-r from-slate-900/50 to-transparent rounded-xl p-6 md:p-8 space-y-3">
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Future Outlook</span>
              <h3 className="text-base font-semibold text-white">エンジニアとしての展望</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">
                現在は実務でのシステムエンジニアリングに加え、Next.js × Tailwind CSS のモダンスタックを用いた自社開発・マイクロSaaSの新規立ち上げを目標に、Stripeを用いた決済基盤の統合などの検証を進めています。
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* フッター（究極にシンプルに） */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-slate-900 text-center md:text-left text-xs text-slate-600 flex flex-col md:flex-row justify-between gap-4">
        <p>© {new Date().getFullYear()} Kang Chimyong. All rights reserved.</p>
        <p className="tracking-wider">Built with Next.js & Tailwind CSS</p>
      </footer>

    </div>
  )
}