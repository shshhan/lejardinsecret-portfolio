import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // 이스케이프되지 않은 엔티티 오류 비활성화
      "react/no-unescaped-entities": "off",
      // 사용되지 않는 변수 경고로 변경 (오류 대신)
      "@typescript-eslint/no-unused-vars": "warn",
    }
  }
];

export default eslintConfig;
