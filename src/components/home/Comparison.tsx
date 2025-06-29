export default function Comparison() {
  const comparisonData = [
    {
      category: "특징",
      shadcn: "컴포넌트 복사 방식, Tailwind CSS 기반",
      antd: "엔터프라이즈급, 풍부한 컴포넌트",
      mui: "Material Design, React 특화",
    },
    {
      category: "스타일링",
      shadcn: "Tailwind CSS",
      antd: "Less + CSS 변수",
      mui: "Emotion/Styled-components",
    },
    {
      category: "TypeScript",
      shadcn: "완전 지원",
      antd: "완전 지원",
      mui: "완전 지원",
    },
    {
      category: "번들 크기",
      shadcn: "매우 작음 (선택적 사용)",
      antd: "큼 (60+ 컴포넌트)",
      mui: "큼 (풍부한 기능)",
    },
    {
      category: "커스터마이징",
      shadcn: "완전 자유",
      antd: "테마 시스템",
      mui: "강력한 테마 시스템",
    },
    {
      category: "접근성",
      shadcn: "우수 (Radix UI 기반)",
      antd: "좋음",
      mui: "우수 (WCAG 준수)",
    },
    {
      category: "학습 곡선",
      shadcn: "보통",
      antd: "낮음",
      mui: "보통",
    },
    {
      category: "적합한 프로젝트",
      shadcn: "커스터마이징 중시, 최신 트렌드",
      antd: "엔터프라이즈, 빠른 개발",
      mui: "Material Design, React 생태계",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        UI 라이브러리 비교
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">
                비교 항목
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 bg-blue-50">
                Shadcn/ui
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 bg-red-50">
                Ant Design
              </th>
              <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-700 bg-purple-50">
                Material-UI
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-700">
                  {row.category}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">
                  {row.shadcn}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">
                  {row.antd}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-sm text-gray-600">
                  {row.mui}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-blue-800 mb-3">Shadcn/ui</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• 컴포넌트를 직접 복사하여 사용</li>
            <li>• Tailwind CSS 기반 스타일링</li>
            <li>• 완전한 커스터마이징 가능</li>
            <li>• 번들 크기 최적화</li>
            <li>• 최신 디자인 트렌드</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-lg border border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-3">Ant Design</h3>
          <ul className="space-y-2 text-sm text-red-700">
            <li>• 엔터프라이즈급 안정성</li>
            <li>• 60+ 고품질 컴포넌트</li>
            <li>• 빠른 개발 가능</li>
            <li>• 풍부한 문서와 예제</li>
            <li>• 국제화(i18n) 지원</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-3">
            Material-UI
          </h3>
          <ul className="space-y-2 text-sm text-purple-700">
            <li>• Google Material Design</li>
            <li>• 강력한 테마 시스템</li>
            <li>• React 생태계 특화</li>
            <li>• 접근성 우수</li>
            <li>• 일관된 디자인 시스템</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
