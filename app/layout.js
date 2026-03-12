export const metadata = {
  title: '완벽한 원시인 서평단 대시보드',
  description: '100인 서평단 활동 종합 관리',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
