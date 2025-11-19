# Agents

このドキュメントは、本プロジェクトの開発に関与するエージェントとその役割について記述します。

## エージェント一覧

### 1. Antigravity (Main Agent)
- **役割**: プロジェクト全体の進行、コーディング、設計、実装、デバッグ
- **機能**:
    - ファイルシステムの読み書き
    - ターミナルコマンドの実行
    - コードベースの検索・分析
    - 計画の策定と実行 (`task.md`, `implementation_plan.md` の管理)

### 2. Browser Subagent
- **役割**: Webブラウザを使用した検証、操作
- **機能**:
    - Webページの閲覧
    - DOM要素の操作（クリック、入力など）
    - スクリーンショットの撮影
    - 実際のブラウザ環境での動作確認

## ワークフロー
1. **Planning**: Antigravityが仕様と計画を策定
2. **Execution**: Antigravityがコードを実装し、環境を構築
3. **Verification**: Antigravity (および Browser Subagent) が動作を検証
