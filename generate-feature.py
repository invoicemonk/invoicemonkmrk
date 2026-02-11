#!/usr/bin/env python3
from pathlib import Path

source = Path('/home/claude/invoicemonk-nextjs/src/pages-original/features/ClientManagement.tsx')
target_dir = Path('/home/claude/invoicemonk-nextjs/src/app/features/client-management')

content = source.read_text()
content = content.replace("from 'react-router-dom'", "from 'next/link'")
content = content.replace('<Link to=', '<Link href=')
content = content.replace("import { Link }", "import Link")
content = content.replace('export default ClientManagement', '')
content = content.replace('const ClientManagement = () => {', 'export function ClientManagementContent() {')

if any(x in content for x in ['useState', 'useEffect', 'motion', 'onClick']):
    content = "'use client'\n\n" + content

(target_dir / 'ClientManagementContent.tsx').write_text(content)
print("✓ Created features/client-management")
