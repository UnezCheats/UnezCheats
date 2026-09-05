const CONFIG = {
    downloadLink: "https://github.com/MosquitoLine/Unez-Core/releases/download/Unez-04-09-2026/UnezCheats.zip",
    lastUpdated: {
        day: "05",
        month: "09",
        time: "13:35:27",
        year: "2026",
        monthPT: "Setembro",
        monthEN: "September",
        monthES: "Septiembre",
        monthRU: "Сентября",
        monthZH: "9月"
    }
};

const datePT = `${CONFIG.lastUpdated.day} de ${CONFIG.lastUpdated.monthPT} de ${CONFIG.lastUpdated.year}`;
const dateEN = `${CONFIG.lastUpdated.monthEN} ${CONFIG.lastUpdated.day}, ${CONFIG.lastUpdated.year}`;
const dateES = `${CONFIG.lastUpdated.day} de ${CONFIG.lastUpdated.monthES} de ${CONFIG.lastUpdated.year}`;
const dateRU = `${CONFIG.lastUpdated.day} ${CONFIG.lastUpdated.monthRU} ${CONFIG.lastUpdated.year}`;
const dateZH = `${CONFIG.lastUpdated.year}年${CONFIG.lastUpdated.monthZH}${CONFIG.lastUpdated.day}日`;
const dateIntegrity = `${CONFIG.lastUpdated.day}.${CONFIG.lastUpdated.month}.${CONFIG.lastUpdated.year} ${CONFIG.lastUpdated.time}`;
const versionBuild = `Build ${CONFIG.lastUpdated.year}.${CONFIG.lastUpdated.month}.${CONFIG.lastUpdated.day}`;

const translations = {
    en: {
        "nav-games": "Supported Games", "nav-sequence": "Launch Sequence", "nav-download": "Download Launcher",
        "hero-eyebrow": "Online", "hero-text-1": "Clean launcher. Fast setup. Everything in one place.",
        "hero-text-2": "Download, switch profiles, and move through supported titles without the usual clutter.",
        "btn-download": "Download Launcher", "btn-discord": "Join Discord",
        "btn-copy": "Copy Password", "btn-copy-success": "Copied!", "btn-copy-failure": "Failed",
        "btn-copy-sha": "Copy SHA256", "btn-copy-sha-success": "Copied!", "btn-copy-sha-failure": "Failed",
        "highlight-1": "Instant updates and safe rollbacks", "highlight-2": "One launcher, many games",
        "highlight-3": "Smart filters, verified mods", "highlight-4": "Password - Unez",
        "integrity-title": "File integrity", "integrity-subtitle": "Live package metadata pulled from the current launcher archive.",
        "integrity-verified": "Verified build", "integrity-version-label": "Version", "integrity-version-val": versionBuild,
        "integrity-updated-label": "Last updated", "integrity-updated-val": dateIntegrity, "integrity-size-label": "File size",
        "integrity-hash-label": "SHA256 fingerprint", "integrity-hash-hint": "Use the exact checksum below to verify the current archive.",
        "games-eyebrow": "Supported games", "games-title": "Supported Games",
        "games-desc-1": "One powerful launcher. Nine fully supported games.",
        "games-desc-2": "All titles run inside a single, unified interface — clean, stable, and instantly switchable between profiles.",
        "game-status": "Online",
        "game-roblox-desc": "Xeno is a next-generation Roblox script executor featuring a modern code editor, multi-tab support, and lightning-fast injection. Built for performance and reliability.",
        "game-cs2-desc": "Unleash God Vision in CS2. Next-gen internal cheat: instant load, zero FPS drop, total control. Humanized Aimbot, smart Triggerbot, advanced Wallhack, live Radar, No Recoil & Bunny Hop.",
        "game-gtav-desc": "Dominate GTA V servers with this external FiveM mod menu featuring ESP, aimbot, vehicle spawner, and more, all while remaining undetected.",
        "game-r6s-desc": "Unleash God Vision in Rainbow Six Siege. Smart Aimbot, Wallhack ESP, real-time Radar, No Recoil & Silent Aim. Constantly updated against BattleEye.",
        "game-pubg-desc": "Next-gen internal PUBG cheat: instant injection, zero FPS drop. Smooth Aimbot, fast Triggerbot, advanced ESP Wallhack, live Radar, No Recoil, No Spread and Bunny Hop.",
        "game-osu-desc": "Next-gen internal osu! cheat: instant injection, zero performance loss. Perfect aim assist, relaxed mode, timewarp, spinbot, cursor dance, and hidden mods bypass.",
        "game-rust-desc": "Next-gen internal Rust cheat: instant injection, zero FPS drop. Smooth Aimbot, advanced ESP Wallhack showing players, loot, animals, traps and ores, Admin ESP, and fast loot.",
        "game-valorant-desc": "Play with god vision. Next-gen cheating technology with instant injection, zero performance loss. Wallhack, aimbot, and radar — all in one sleek package.",
        "game-fortnite-desc": "Next-gen internal Fortnite cheat: instant injection, zero FPS drop. Smooth Aimbot, advanced ESP, Triggerbot, No Recoil, No Spread, Auto Build, and Silent Aim.",
        "tag-quick-load": "Quick load", "tag-clean-workspace": "Clean workspace", "tag-stable-route": "Stable route",
        "tag-unified-config": "Unified config", "tag-gtav": "GTA V", "tag-fivem": "FiveM",
        "tag-fast-access": "Fast access", "tag-focused-stack": "Focused stack", "tag-low-friction": "Low friction",
        "tag-direct-route": "Direct route", "tag-fast-open": "Fast open", "tag-minimal-surface": "Minimal surface",
        "tag-quick-access": "Quick access", "tag-organized-options": "Organized options",
        "tag-polished-layout": "Polished layout", "tag-consistent-shell": "Consistent shell",
        "tag-main-catalog": "Main catalog", "tag-fast-path": "Fast path",
        "game-dbd-desc": "High-quality internal cheat built for Dead by Daylight. Clean visuals, smooth gameplay packed with powerful features. Perfect for both Killer and Survivor sides. Smart aimbot, player ESP, 2D radar, world ESP.",
        "tag-dbd-1": "Killer & Survivor", "tag-dbd-2": "Player ESP",
        "game-apex-desc": "Premium Apex Legends cheats. Dominate with aimbot assists, ESP, wallhack & radar hack. Stay undetected, destroy every lobby.",
        "tag-apex-1": "Wallhack", "tag-apex-2": "Radar hack",
        "game-marvel-desc": "Dominate the arena with next-gen aim assist for Marvel Rivals. Hyper-accurate targeting, ability-tracking AI, and real-time enemy prediction. Proprietary anti-detection, zero lag, maximum efficiency.",
        "tag-marvel-1": "Aim assist AI", "tag-marvel-2": "Anti-detection",
        "sequence-eyebrow": "Launch sequence", "sequence-title": "Simple flow. More attitude.",
        "sequence-desc": "The structure stays short and obvious while the visuals move closer to a command-console feel.",
        "step1-title": "Pull the live build", "step1-desc": "The main CTA sends users into the direct download route without extra hops.",
        "step2-title": "Unlock the package", "step2-desc": "The password action stays one click away and remains visually secondary.",
        "step3-title": "Enter the launcher", "step3-desc": "The page frames the build like a private control panel instead of a generic landing.",
        "deploy-eyebrow": "Ready to deploy", "deploy-title": "Same download path. Harder visual hit.",
        "footer-nav-title": "Navigation", "footer-home": "Home", "footer-legal-title": "Legal",
        "footer-terms": "Terms of Service", "footer-privacy": "Privacy Policy",
        "modal-eyebrow": "Download started", "modal-title": "Unez Launcher Installation Guide",
        "modal-lead": "Your archive should begin downloading automatically. Follow the steps below once the file finishes downloading.",
        "modal-steps-title": "Install steps", "modal-step-1": "Download the latest launcher from UnezCheats.live.",
        "modal-step-2": "Extract the archive using password: Unez.", "modal-step-3": "Completely disable your antivirus.",
        "modal-step-4": "Run the launcher as Administrator.", "modal-step-5": "Select the desired game and inject.",
        "modal-notes-title": "Recommended notes", "modal-note-1": "Windows 10 22H2 or Windows 11 23H2/24H2 is recommended.",
        "modal-note-2": "Disable Secure Boot & Virtualization in BIOS.", "modal-note-3": "Do not use on virtual machines.",
        "modal-note-4-prefix": "If you encounter issues, join our", "modal-note-4-link": "Discord", "modal-close": "Close",
        "legal-terms-tab": "Terms", "legal-privacy-tab": "Privacy",
        "terms-page-title": "Terms of Service",
        "terms-hero-p": "These terms explain how access to the Unez website, launcher, downloads, support channels, and related services is provided. By using the site or requesting access, you agree to the terms below.",
        "terms-meta-1": `Last updated: ${dateEN}`, "terms-meta-2": "Digital access only", "terms-meta-3": "Moscow time operations",
        "terms-summary-title": "Quick summary",
        "terms-summary-1": "Access is granted for personal use tied to the delivery and support terms listed here.",
        "terms-summary-2": "Users are responsible for keeping their own systems, credentials, and downloaded files secure.",
        "terms-summary-3": "Service availability, releases, and update cadence may change without prior notice.",
        "terms-summary-4": "Abuse, resale, fraudulent payment activity, or attacks against the service can lead to suspension.",
        "terms-glance-title": "At a glance",
        "terms-glance-op-label": "Operator", "terms-glance-op-val": "Unez Cheats",
        "terms-glance-scope-label": "Scope", "terms-glance-scope-val": "Website, launcher delivery, update access, and support communication.",
        "terms-glance-region-label": "Region", "terms-glance-region-val": "Worldwide digital delivery. Internal timing is tracked in Moscow time.",
        "terms-s1-title": "1. Scope of service",
        "terms-s1-p": "Unez provides access to a website, download delivery, and support materials around its launcher-based software. The site content, file structure, release notes, availability, and access flow may evolve over time as the service is maintained.",
        "terms-s2-title": "2. Eligibility and account responsibility",
        "terms-s2-p": "You are responsible for the environment in which you access the site, store downloaded files, and manage any credentials or passwords provided to you. If you share private access details, lose control of your device, or expose your download package, that risk stays with you.",
        "terms-s3-title": "3. Acceptable use",
        "terms-s3-1": "No chargeback abuse, payment fraud, impersonation, or intentionally false support claims.",
        "terms-s3-2": "No attempts to attack, scrape, overload, reverse engineer, or disrupt the website or delivery flow.",
        "terms-s3-3": "No resale, unauthorized redistribution, or publication of private downloads, passwords, or hidden routes.",
        "terms-s3-4": "No automated access intended to bypass normal limits, session rules, or admin protections.",
        "terms-s4-title": "4. Delivery and updates",
        "terms-s4-p": "Delivery is handled digitally through the site and related support channels. Build versions, archive names, file hashes, update timing, and included content can change as the product is maintained. A previous version is not guaranteed to remain available indefinitely.",
        "terms-s5-title": "5. Availability and downtime",
        "terms-s5-p": "The service is provided on an ongoing, maintained basis, but uninterrupted availability is not guaranteed. The site may be updated, rate-limited, moved behind protective services, or temporarily taken offline for maintenance, abuse prevention, or infrastructure work.",
        "terms-s6-title": "6. Intellectual property",
        "terms-s6-p": "Site copy, branding, structure, downloadable packages, and related materials remain the property of Unez unless otherwise stated. You may not republish, repackage, mirror, or sell these materials without written permission.",
        "terms-s7-title": "7. Limitation of liability",
        "terms-s7-p": "The service is provided as a maintained digital product, but use of the website, delivered files, and any associated setup is at your own risk. To the maximum extent permitted by applicable law, Unez is not liable for indirect, incidental, or consequential damages, including data loss, downtime, or local environment issues on the user side.",
        "terms-s7-note": "If you run into a delivery or access issue, support should be contacted first so the problem can be reviewed and, where possible, corrected.",
        "terms-s8-title": "8. Changes to these terms",
        "terms-s8-p": "These terms may be updated as the site, delivery model, or support process changes. The latest published version on the site governs future use from the date it is posted.",
        "terms-footer-title": "Need the rest of the legal set?",
        "terms-footer-p": "Privacy explains what data is logged on visits, downloads, and protected admin access on the site.",
        "privacy-page-title": "Privacy Policy",
        "privacy-hero-p": "This page explains what data is logged when someone visits the Unez site, opens protected routes, or downloads a file. The policy is written to match the actual analytics and admin tools currently running on the site.",
        "privacy-meta-1": `Last updated: ${dateEN}`, "privacy-meta-2": "Traffic analytics enabled", "privacy-meta-3": "Storage window in Moscow time",
        "privacy-summary-title": "What is collected",
        "privacy-summary-1": "Visit events, download events, request time, and requested page or file.",
        "privacy-summary-2": "IP address, country, region, city, and provider information derived from the IP.",
        "privacy-summary-3": "Browser user-agent, basic referrer or source, and session data for protected admin access.",
        "privacy-summary-4": "Short rolling log storage used for support, diagnostics, abuse monitoring, and site health.",
        "privacy-glance-title": "At a glance",
        "privacy-glance-purpose-label": "Purpose", "privacy-glance-purpose-val": "Analytics, abuse prevention, support review, and download delivery visibility.",
        "privacy-glance-admin-label": "Admin-only visibility", "privacy-glance-admin-val": "Detailed logs are stored for the private owner dashboard and exports.",
        "privacy-glance-edge-label": "Third-party edge", "privacy-glance-edge-val": "Traffic may pass through Cloudflare and standard hosting infrastructure.",
        "privacy-s1-title": "1. Visit and download analytics",
        "privacy-s1-p": "When the site is opened through its main entry point, a visit event can be logged. When a file is served through the download route, a download event can be logged. These records help track delivery health, identify broken flows, and understand traffic sources at a basic operational level.",
        "privacy-s2-title": "2. IP-derived location data",
        "privacy-s2-p": "The site may resolve approximate country, region, city, and provider data from a visitor IP address using standard IP geo lookup services. This information is approximate and is used for traffic overview, abuse detection, and owner-only analytics.",
        "privacy-s3-title": "3. Referrers and browser data",
        "privacy-s3-p": "Referrer and user-agent values may be recorded to show where traffic came from and which browser families are being used. This helps with debugging, compatibility review, and measuring which channels are actually sending traffic to the site.",
        "privacy-s4-title": "4. Cookies and protected admin access",
        "privacy-s4-p": "The private admin area uses a session cookie to keep the owner authenticated after a successful gate and login flow. That cookie is used only for session continuity, hidden route access, and basic admin protection. It is not intended for advertising.",
        "privacy-s5-title": "5. How the data is used",
        "privacy-s5-1": "To operate the site and deliver files.",
        "privacy-s5-2": "To review traffic sources, country distribution, and browser coverage.",
        "privacy-s5-3": "To investigate suspicious activity, scraping, abusive requests, or delivery failures.",
        "privacy-s5-4": "To help support diagnose why a user cannot access or download a file.",
        "privacy-s6-title": "6. Sharing and disclosure",
        "privacy-s6-p": "Unez does not publish private log records publicly. Traffic may, however, be processed by infrastructure providers such as the hosting environment, content delivery edge, or standard DNS and security vendors required to operate the site. Data may also be disclosed where required by law or to protect the service from abuse.",
        "privacy-s7-title": "7. Retention",
        "privacy-s7-p": "Activity logs are stored in a rolling local window for recent operational visibility rather than indefinite public history. If exports are generated from the private admin panel, those exported copies are handled by the owner separately from the rolling site storage.",
        "privacy-s7-note": "The current build keeps a capped rolling history for visits and downloads instead of unlimited permanent logging.",
        "privacy-s8-title": "8. Contact and policy updates",
        "privacy-s8-p": "This privacy policy may be updated as the site stack, analytics model, or support process changes. The version published on the site is the current controlling version.",
        "privacy-footer-title": "Related documents",
        "privacy-footer-p": "Terms explains the rules for access and service usage across the site, launcher delivery, and support communication.",
    },
    "pt-br": {
        "nav-games": "Jogos Suportados", "nav-sequence": "Sequência de Lançamento", "nav-download": "Baixar Launcher",
        "hero-eyebrow": "Online", "hero-text-1": "Launcher limpo. Configuração rápida. Tudo em um só lugar.",
        "hero-text-2": "Baixe, troque de perfis e navegue pelos títulos suportados sem complicações.",
        "btn-download": "Baixar Launcher", "btn-discord": "Entrar no Discord",
        "btn-copy": "Copiar Senha", "btn-copy-success": "Copiado!", "btn-copy-failure": "Falhou",
        "btn-copy-sha": "Copiar SHA256", "btn-copy-sha-success": "Copiado!", "btn-copy-sha-failure": "Falhou",
        "highlight-1": "Atualizações instantâneas e rollbacks seguros", "highlight-2": "Um launcher, muitos jogos",
        "highlight-3": "Filtros inteligentes, mods verificados", "highlight-4": "Senha - Unez",
        "integrity-title": "Integridade do arquivo", "integrity-subtitle": "Metadados do pacote atual extraídos do arquivo do launcher.",
        "integrity-verified": "Build verificado", "integrity-version-label": "Versão", "integrity-version-val": versionBuild,
        "integrity-updated-label": "Última atualização", "integrity-updated-val": dateIntegrity, "integrity-size-label": "Tamanho do arquivo",
        "integrity-hash-label": "Fingerprint SHA256", "integrity-hash-hint": "Use o checksum abaixo para verificar o arquivo atual.",
        "games-eyebrow": "Jogos suportados", "games-title": "Jogos Suportados",
        "games-desc-1": "Um launcher poderoso. Nove jogos totalmente suportados.",
        "games-desc-2": "Todos os títulos rodam em uma única interface unificada — limpa, estável e com troca instantânea entre perfis.",
        "game-status": "Online",
        "game-roblox-desc": "Xeno é um executor de scripts Roblox de nova geração com editor de código moderno, suporte a múltiplas abas e injeção ultrarrápida. Construído para performance e confiabilidade.",
        "game-cs2-desc": "Domine o CS2 com Visão Divina. Aimbot humanizado, Triggerbot inteligente, Wallhack avançado, Radar ao vivo, Sem Recuo & Bunny Hop. Zero queda de FPS.",
        "game-gtav-desc": "Domine servidores GTA V com este mod menu FiveM externo com ESP, aimbot, gerador de veículos e muito mais, tudo sem ser detectado.",
        "game-r6s-desc": "Domine o Rainbow Six Siege com Visão Divina. Aimbot inteligente, ESP Wallhack, Radar em tempo real, Sem Recuo & Silent Aim. Atualizado constantemente contra o BattleEye.",
        "game-pubg-desc": "Cheat interno PUBG de nova geração: injeção instantânea, zero queda de FPS. Aimbot suave, Triggerbot rápido, ESP Wallhack avançado, Radar ao vivo, Sem Recuo e Sem Spread.",
        "game-osu-desc": "Cheat interno osu! de nova geração: injeção instantânea, zero perda de desempenho. Assistência de mira perfeita, modo relaxado, timewarp, spinbot e cursor dance.",
        "game-rust-desc": "Cheat interno Rust de nova geração: injeção instantânea, zero queda de FPS. Aimbot suave, ESP Wallhack avançado mostrando jogadores, loot, animais, armadilhas e minérios.",
        "game-valorant-desc": "Jogue com visão divina. Tecnologia de nova geração: Wallhack, aimbot e radar — tudo em um pacote elegante.",
        "game-fortnite-desc": "Cheat interno Fortnite de nova geração: injeção instantânea, zero queda de FPS. Aimbot suave, ESP avançado, Triggerbot, Sem Recuo, Auto Construção e Silent Aim.",
        "tag-quick-load": "Carregamento rápido", "tag-clean-workspace": "Interface limpa", "tag-stable-route": "Rota estável",
        "tag-unified-config": "Config unificada", "tag-gtav": "GTA V", "tag-fivem": "FiveM",
        "tag-fast-access": "Acesso rápido", "tag-focused-stack": "Stack focado", "tag-low-friction": "Baixo atrito",
        "tag-direct-route": "Rota direta", "tag-fast-open": "Abertura rápida", "tag-minimal-surface": "Superfície mínima",
        "tag-quick-access": "Acesso rápido", "tag-organized-options": "Opções organizadas",
        "tag-polished-layout": "Layout polido", "tag-consistent-shell": "Shell consistente",
        "tag-main-catalog": "Catálogo principal", "tag-fast-path": "Caminho rápido",
        "game-dbd-desc": "Cheat interno de alta qualidade para Dead by Daylight. Visuais limpos, gameplay suave e repleto de recursos poderosos. Perfeito para os lados Assassino e Sobrevivente. Aimbot inteligente, ESP de jogadores, radar 2D, ESP de mundo.",
        "tag-dbd-1": "Assassino & Sobrevivente", "tag-dbd-2": "ESP de jogadores",
        "game-apex-desc": "Cheats premium para Apex Legends. Domine com aimbot, ESP, wallhack e radar hack. Fique indetectável e destrua cada lobby.",
        "tag-apex-1": "Wallhack", "tag-apex-2": "Radar hack",
        "game-marvel-desc": "Domine a arena com assistência de mira de nova geração para Marvel Rivals. Mira hiper-precisa, IA de rastreamento de habilidades e previsão de inimigos em tempo real. Anti-detecção proprietária, zero lag, eficiência máxima.",
        "tag-marvel-1": "IA de mira", "tag-marvel-2": "Anti-detecção",
        "sequence-eyebrow": "Sequência de lançamento", "sequence-title": "Fluxo simples. Mais atitude.",
        "sequence-desc": "A estrutura permanece curta e óbvia enquanto os visuais se aproximam de um painel de controle.",
        "step1-title": "Baixe o build atual", "step1-desc": "O botão principal leva os usuários diretamente ao download sem etapas extras.",
        "step2-title": "Desbloqueie o pacote", "step2-desc": "A ação de senha fica a um clique de distância e permanece visualmente secundária.",
        "step3-title": "Entre no launcher", "step3-desc": "A página apresenta o build como um painel de controle privado em vez de uma landing genérica.",
        "deploy-eyebrow": "Pronto para usar", "deploy-title": "Mesmo caminho de download. Impacto visual maior.",
        "footer-nav-title": "Navegação", "footer-home": "Início", "footer-legal-title": "Legal",
        "footer-terms": "Termos de Serviço", "footer-privacy": "Política de Privacidade",
        "modal-eyebrow": "Download iniciado", "modal-title": "Guia de Instalação do Launcher Unez",
        "modal-lead": "Seu arquivo deve começar a baixar automaticamente. Siga os passos abaixo após o download.",
        "modal-steps-title": "Passos de instalação", "modal-step-1": "Baixe o launcher mais recente em UnezCheats.live.",
        "modal-step-2": "Extraia o arquivo usando a senha: Unez.", "modal-step-3": "Desative completamente o seu antivírus.",
        "modal-step-4": "Execute o launcher como Administrador.", "modal-step-5": "Selecione o jogo desejado e injete.",
        "modal-notes-title": "Notas recomendadas", "modal-note-1": "Windows 10 22H2 ou Windows 11 23H2/24H2 é recomendado.",
        "modal-note-2": "Desative o Secure Boot e a Virtualização no BIOS.", "modal-note-3": "Não use em máquinas virtuais.",
        "modal-note-4-prefix": "Se tiver problemas, entre no nosso", "modal-note-4-link": "Discord", "modal-close": "Fechar",
        "legal-terms-tab": "Termos", "legal-privacy-tab": "Privacidade",
        "terms-page-title": "Termos de Serviço",
        "terms-hero-p": "Estes termos explicam como o acesso ao site, launcher, downloads, canais de suporte e serviços relacionados da Unez é fornecido. Ao usar o site ou solicitar acesso, você concorda com os termos abaixo.",
        "terms-meta-1": `Última atualização: ${datePT}`, "terms-meta-2": "Apenas acesso digital", "terms-meta-3": "Operações no horário de Moscou",
        "terms-summary-title": "Resumo rápido",
        "terms-summary-1": "O acesso é concedido para uso pessoal vinculado aos termos de entrega e suporte listados aqui.",
        "terms-summary-2": "Os usuários são responsáveis por manter seus sistemas, credenciais e arquivos baixados seguros.",
        "terms-summary-3": "A disponibilidade do serviço, lançamentos e cadência de atualização podem mudar sem aviso prévio.",
        "terms-summary-4": "Abuso, revenda, atividade fraudulenta de pagamento ou ataques ao serviço podem levar à suspensão.",
        "terms-glance-title": "Resumo",
        "terms-glance-op-label": "Operador", "terms-glance-op-val": "Unez Cheats",
        "terms-glance-scope-label": "Escopo", "terms-glance-scope-val": "Site, entrega do launcher, acesso a atualizações e comunicação de suporte.",
        "terms-glance-region-label": "Região", "terms-glance-region-val": "Entrega digital mundial. O horário interno é rastreado no horário de Moscou.",
        "terms-s1-title": "1. Escopo do serviço",
        "terms-s1-p": "A Unez fornece acesso a um site, entrega de downloads e materiais de suporte relacionados ao seu software baseado em launcher. O conteúdo do site, estrutura de arquivos, notas de versão, disponibilidade e fluxo de acesso podem evoluir ao longo do tempo à medida que o serviço é mantido.",
        "terms-s2-title": "2. Elegibilidade e responsabilidade da conta",
        "terms-s2-p": "Você é responsável pelo ambiente em que acessa o site, armazena arquivos baixados e gerencia quaisquer credenciais ou senhas fornecidas a você. Se você compartilhar detalhes de acesso privados, perder o controle do seu dispositivo ou expor seu pacote de download, esse risco é seu.",
        "terms-s3-title": "3. Uso aceitável",
        "terms-s3-1": "Proibido abuso de estorno, fraude de pagamento, falsidade ideológica ou declarações falsas de suporte.",
        "terms-s3-2": "Proibido tentar atacar, raspar, sobrecarregar, fazer engenharia reversa ou perturbar o site ou o fluxo de entrega.",
        "terms-s3-3": "Proibida a revenda, redistribuição não autorizada ou publicação de downloads privados, senhas ou rotas ocultas.",
        "terms-s3-4": "Proibido acesso automatizado com a intenção de contornar limites normais, regras de sessão ou proteções de administrador.",
        "terms-s4-title": "4. Entrega e atualizações",
        "terms-s4-p": "A entrega é feita digitalmente pelo site e canais de suporte relacionados. Versões de build, nomes de arquivos, hashes, cronograma de atualização e conteúdo incluído podem mudar conforme o produto é mantido. Uma versão anterior não é garantida de permanecer disponível indefinidamente.",
        "terms-s5-title": "5. Disponibilidade e tempo de inatividade",
        "terms-s5-p": "O serviço é fornecido de forma contínua e mantida, mas a disponibilidade ininterrupta não é garantida. O site pode ser atualizado, limitado, movido para trás de serviços de proteção ou temporariamente desativado para manutenção.",
        "terms-s6-title": "6. Propriedade intelectual",
        "terms-s6-p": "O conteúdo do site, marca, estrutura, pacotes para download e materiais relacionados permanecem propriedade da Unez, salvo indicação em contrário. Você não pode republicar, reembalar, espelhar ou vender esses materiais sem permissão por escrito.",
        "terms-s7-title": "7. Limitação de responsabilidade",
        "terms-s7-p": "O serviço é fornecido como um produto digital mantido, mas o uso do site, arquivos entregues e qualquer configuração associada é de sua responsabilidade. Na extensão máxima permitida pela lei aplicável, a Unez não é responsável por danos indiretos, incidentais ou consequenciais.",
        "terms-s7-note": "Se você encontrar um problema de entrega ou acesso, o suporte deve ser contatado primeiro para que o problema possa ser revisado.",
        "terms-s8-title": "8. Alterações nestes termos",
        "terms-s8-p": "Estes termos podem ser atualizados conforme o site, modelo de entrega ou processo de suporte mudam. A versão mais recente publicada no site rege o uso futuro a partir da data em que for publicada.",
        "terms-footer-title": "Precisa do restante do conjunto legal?",
        "terms-footer-p": "A Privacidade explica quais dados são registrados em visitas, downloads e acesso administrativo protegido no site.",
        "privacy-page-title": "Política de Privacidade",
        "privacy-hero-p": "Esta página explica quais dados são registrados quando alguém visita o site da Unez, abre rotas protegidas ou baixa um arquivo. A política é escrita para corresponder às ferramentas de análise e administração atualmente em execução no site.",
        "privacy-meta-1": `Última atualização: ${datePT}`, "privacy-meta-2": "Análise de tráfego ativada", "privacy-meta-3": "Janela de armazenamento no horário de Moscou",
        "privacy-summary-title": "O que é coletado",
        "privacy-summary-1": "Eventos de visita, eventos de download, hora da solicitação e página ou arquivo solicitado.",
        "privacy-summary-2": "Endereço IP, país, região, cidade e informações do provedor derivadas do IP.",
        "privacy-summary-3": "User-agent do navegador, referenciador básico ou fonte, e dados de sessão para acesso administrativo protegido.",
        "privacy-summary-4": "Armazenamento de log rotativo curto usado para suporte, diagnóstico, monitoramento de abuso e saúde do site.",
        "privacy-glance-title": "Resumo",
        "privacy-glance-purpose-label": "Propósito", "privacy-glance-purpose-val": "Análise, prevenção de abuso, revisão de suporte e visibilidade de entrega de downloads.",
        "privacy-glance-admin-label": "Visibilidade apenas para administradores", "privacy-glance-admin-val": "Logs detalhados são armazenados para o painel do proprietário e exportações.",
        "privacy-glance-edge-label": "Edge de terceiros", "privacy-glance-edge-val": "O tráfego pode passar pela Cloudflare e pela infraestrutura de hospedagem padrão.",
        "privacy-s1-title": "1. Análise de visitas e downloads",
        "privacy-s1-p": "Quando o site é aberto pelo ponto de entrada principal, um evento de visita pode ser registrado. Quando um arquivo é servido pela rota de download, um evento de download pode ser registrado. Esses registros ajudam a rastrear a integridade da entrega e entender as fontes de tráfego.",
        "privacy-s2-title": "2. Dados de localização derivados do IP",
        "privacy-s2-p": "O site pode resolver dados aproximados de país, região, cidade e provedor a partir do endereço IP de um visitante usando serviços padrão de geolocalização de IP. Essas informações são aproximadas e usadas para visão geral de tráfego e detecção de abuso.",
        "privacy-s3-title": "3. Referenciadores e dados do navegador",
        "privacy-s3-p": "Os valores de referenciador e user-agent podem ser registrados para mostrar de onde veio o tráfego e quais famílias de navegadores estão sendo usadas. Isso ajuda com depuração, revisão de compatibilidade e medição de canais de tráfego.",
        "privacy-s4-title": "4. Cookies e acesso administrativo protegido",
        "privacy-s4-p": "A área administrativa privada usa um cookie de sessão para manter o proprietário autenticado após um fluxo de login bem-sucedido. Esse cookie é usado apenas para continuidade de sessão, acesso a rotas ocultas e proteção administrativa básica. Não se destina à publicidade.",
        "privacy-s5-title": "5. Como os dados são usados",
        "privacy-s5-1": "Para operar o site e entregar arquivos.",
        "privacy-s5-2": "Para revisar fontes de tráfego, distribuição por país e cobertura de navegadores.",
        "privacy-s5-3": "Para investigar atividades suspeitas, raspagem, solicitações abusivas ou falhas de entrega.",
        "privacy-s5-4": "Para ajudar o suporte a diagnosticar por que um usuário não consegue acessar ou baixar um arquivo.",
        "privacy-s6-title": "6. Compartilhamento e divulgação",
        "privacy-s6-p": "A Unez não publica registros de log privados publicamente. O tráfego pode, no entanto, ser processado por provedores de infraestrutura como o ambiente de hospedagem, edge de entrega de conteúdo ou fornecedores de segurança e DNS necessários para operar o site.",
        "privacy-s7-title": "7. Retenção",
        "privacy-s7-p": "Os logs de atividade são armazenados em uma janela local rotativa para visibilidade operacional recente, em vez de histórico público indefinido. Se exportações forem geradas do painel administrativo privado, essas cópias exportadas são tratadas pelo proprietário separadamente.",
        "privacy-s7-note": "O build atual mantém um histórico rotativo limitado para visitas e downloads em vez de registro permanente ilimitado.",
        "privacy-s8-title": "8. Contato e atualizações da política",
        "privacy-s8-p": "Esta política de privacidade pode ser atualizada conforme o stack do site, modelo de análise ou processo de suporte mudam. A versão publicada no site é a versão controladora atual.",
        "privacy-footer-title": "Documentos relacionados",
        "privacy-footer-p": "Os Termos explicam as regras de acesso e uso do serviço no site, entrega do launcher e comunicação de suporte.",
    },
    es: {
        "nav-games": "Juegos Soportados", "nav-sequence": "Secuencia de Inicio", "nav-download": "Descargar Launcher",
        "hero-eyebrow": "En Línea", "hero-text-1": "Launcher limpio. Configuración rápida. Todo en un solo lugar.",
        "hero-text-2": "Descarga, cambia perfiles y navega por títulos soportados sin complicaciones.",
        "btn-download": "Descargar Launcher", "btn-discord": "Unirse a Discord",
        "btn-copy": "Copiar Contraseña", "btn-copy-success": "¡Copiado!", "btn-copy-failure": "Falló",
        "btn-copy-sha": "Copiar SHA256", "btn-copy-sha-success": "¡Copiado!", "btn-copy-sha-failure": "Falló",
        "highlight-1": "Actualizaciones instantáneas y rollbacks seguros", "highlight-2": "Un launcher, muchos juegos",
        "highlight-3": "Filtros inteligentes, mods verificados", "highlight-4": "Contraseña - Unez",
        "integrity-title": "Integridad del archivo", "integrity-subtitle": "Metadatos del paquete actual extraídos del archivo del launcher.",
        "integrity-verified": "Build verificado", "integrity-version-label": "Versión", "integrity-version-val": versionBuild,
        "integrity-updated-label": "Última actualización", "integrity-updated-val": dateIntegrity, "integrity-size-label": "Tamaño del archivo",
        "integrity-hash-label": "Huella SHA256", "integrity-hash-hint": "Usa el checksum de abajo para verificar el archivo actual.",
        "games-eyebrow": "Juegos soportados", "games-title": "Juegos Soportados",
        "games-desc-1": "Un launcher poderoso. Nueve juegos totalmente soportados.",
        "games-desc-2": "Todos los títulos corren en una interfaz unificada — limpia, estable y con cambio instantáneo entre perfiles.",
        "game-status": "En Línea",
        "game-roblox-desc": "Xeno es un ejecutor de scripts Roblox de nueva generación con editor de código moderno, soporte multi-pestaña e inyección ultrarrápida.",
        "game-cs2-desc": "Desata la Visión Divina en CS2. Aimbot humanizado, Triggerbot inteligente, Wallhack avanzado, Radar en vivo, Sin Retroceso & Bunny Hop. Carga instantánea, cero caída de FPS.",
        "game-gtav-desc": "Domina servidores GTA V con este menú de mods FiveM externo con ESP, aimbot, generador de vehículos y más, sin ser detectado.",
        "game-r6s-desc": "Desata la Visión Divina en Rainbow Six Siege. Aimbot inteligente, Wallhack ESP, Radar en tiempo real, Sin Retroceso & Silent Aim.",
        "game-pubg-desc": "Cheat interno PUBG de nueva generación: inyección instantánea, cero caída de FPS. Aimbot suave, Triggerbot rápido, Wallhack ESP avanzado, Radar en vivo, Sin Retroceso y Sin Dispersión.",
        "game-osu-desc": "Cheat interno osu! de nueva generación: inyección instantánea, cero pérdida de rendimiento. Asistencia de puntería perfecta, modo relajado, timewarp, spinbot y cursor dance.",
        "game-rust-desc": "Cheat interno Rust de nueva generación: inyección instantánea, cero caída de FPS. Aimbot suave, Wallhack ESP avanzado mostrando jugadores, loot, animales, trampas y minerales.",
        "game-valorant-desc": "Juega con visión divina. Tecnología de nueva generación: Wallhack, aimbot y radar — todo en un paquete elegante.",
        "game-fortnite-desc": "Cheat interno Fortnite de nueva generación: inyección instantánea, cero caída de FPS. Aimbot suave, ESP avanzado, Triggerbot, Sin Retroceso, Auto Construcción y Silent Aim.",
        "tag-quick-load": "Carga rápida", "tag-clean-workspace": "Espacio limpio", "tag-stable-route": "Ruta estable",
        "tag-unified-config": "Config unificada", "tag-gtav": "GTA V", "tag-fivem": "FiveM",
        "tag-fast-access": "Acceso rápido", "tag-focused-stack": "Stack enfocado", "tag-low-friction": "Baja fricción",
        "tag-direct-route": "Ruta directa", "tag-fast-open": "Apertura rápida", "tag-minimal-surface": "Superficie mínima",
        "tag-quick-access": "Acceso rápido", "tag-organized-options": "Opciones organizadas",
        "tag-polished-layout": "Layout pulido", "tag-consistent-shell": "Shell consistente",
        "tag-main-catalog": "Catálogo principal", "tag-fast-path": "Ruta rápida",
        "game-dbd-desc": "Cheat interno de alta calidad para Dead by Daylight. Visuales limpios, gameplay fluido y lleno de funciones potentes. Perfecto para Asesino y Superviviente. Aimbot inteligente, ESP de jugadores, radar 2D, ESP de mundo.",
        "tag-dbd-1": "Asesino & Superviviente", "tag-dbd-2": "ESP de jugadores",
        "game-apex-desc": "Cheats premium para Apex Legends. Domina con aimbot, ESP, wallhack y radar hack. Mantente indetectable y destruye cada lobby.",
        "tag-apex-1": "Wallhack", "tag-apex-2": "Radar hack",
        "game-marvel-desc": "Domina la arena con asistencia de puntería de nueva generación para Marvel Rivals. Puntería hiper-precisa, IA de rastreo de habilidades y predicción de enemigos en tiempo real. Anti-detección propietaria, cero lag, máxima eficiencia.",
        "tag-marvel-1": "IA de puntería", "tag-marvel-2": "Anti-detección",
        "sequence-eyebrow": "Secuencia de inicio", "sequence-title": "Flujo simple. Más actitud.",
        "sequence-desc": "La estructura se mantiene corta y obvia mientras los visuales se acercan a un panel de control.",
        "step1-title": "Descarga el build actual", "step1-desc": "El botón principal lleva a los usuarios directamente a la descarga sin pasos extra.",
        "step2-title": "Desbloquea el paquete", "step2-desc": "La acción de contraseña está a un clic de distancia y permanece visualmente secundaria.",
        "step3-title": "Entra al launcher", "step3-desc": "La página presenta el build como un panel de control privado en lugar de un landing genérico.",
        "deploy-eyebrow": "Listo para usar", "deploy-title": "Mismo camino de descarga. Mayor impacto visual.",
        "footer-nav-title": "Navegación", "footer-home": "Inicio", "footer-legal-title": "Legal",
        "footer-terms": "Términos de Servicio", "footer-privacy": "Política de Privacidad",
        "modal-eyebrow": "Descarga iniciada", "modal-title": "Guía de Instalación del Launcher Unez",
        "modal-lead": "Tu archivo debería comenzar a descargarse automáticamente. Sigue los pasos a continuación.",
        "modal-steps-title": "Pasos de instalación", "modal-step-1": "Descarga el launcher más reciente en UnezCheats.live.",
        "modal-step-2": "Extrae el archivo usando la contraseña: Unez.", "modal-step-3": "Desactiva completamente tu antivirus.",
        "modal-step-4": "Ejecuta el launcher como Administrador.", "modal-step-5": "Selecciona el juego deseado e inyecta.",
        "modal-notes-title": "Notas recomendadas", "modal-note-1": "Se recomienda Windows 10 22H2 o Windows 11 23H2/24H2.",
        "modal-note-2": "Desactiva Secure Boot y Virtualización en el BIOS.", "modal-note-3": "No usar en máquinas virtuales.",
        "modal-note-4-prefix": "Si tienes problemas, únete a nuestro", "modal-note-4-link": "Discord", "modal-close": "Cerrar",
        "legal-terms-tab": "Términos", "legal-privacy-tab": "Privacidad",
        "terms-page-title": "Términos de Servicio",
        "terms-hero-p": "Estos términos explican cómo se proporciona el acceso al sitio web, launcher, descargas, canales de soporte y servicios relacionados de Unez. Al usar el sitio o solicitar acceso, aceptas los términos a continuación.",
        "terms-meta-1": `Última actualización: ${dateES}`, "terms-meta-2": "Solo acceso digital", "terms-meta-3": "Operaciones en hora de Moscú",
        "terms-summary-title": "Resumen rápido",
        "terms-summary-1": "El acceso se otorga para uso personal vinculado a los términos de entrega y soporte enumerados aquí.",
        "terms-summary-2": "Los usuarios son responsables de mantener seguros sus sistemas, credenciales y archivos descargados.",
        "terms-summary-3": "La disponibilidad del servicio, lanzamientos y cadencia de actualización pueden cambiar sin previo aviso.",
        "terms-summary-4": "El abuso, reventa, actividad de pago fraudulenta o ataques contra el servicio pueden llevar a la suspensión.",
        "terms-glance-title": "De un vistazo",
        "terms-glance-op-label": "Operador", "terms-glance-op-val": "Unez Cheats",
        "terms-glance-scope-label": "Alcance", "terms-glance-scope-val": "Sitio web, entrega del launcher, acceso a actualizaciones y comunicación de soporte.",
        "terms-glance-region-label": "Región", "terms-glance-region-val": "Entrega digital mundial. El tiempo interno se rastrea en hora de Moscú.",
        "terms-s1-title": "1. Alcance del servicio", "terms-s1-p": "Unez proporciona acceso a un sitio web, entrega de descargas y materiales de soporte en torno a su software basado en launcher. El contenido, estructura, notas de versión y disponibilidad pueden evolucionar con el tiempo.",
        "terms-s2-title": "2. Elegibilidad y responsabilidad de la cuenta", "terms-s2-p": "Eres responsable del entorno en el que accedes al sitio, almacenas archivos descargados y gestionas cualquier credencial o contraseña proporcionada. Si compartes detalles de acceso privados o pierdes el control de tu dispositivo, ese riesgo es tuyo.",
        "terms-s3-title": "3. Uso aceptable",
        "terms-s3-1": "Prohibido el abuso de contracargos, fraude de pago, suplantación o declaraciones de soporte falsas.",
        "terms-s3-2": "Prohibidos los intentos de atacar, raspar, sobrecargar, realizar ingeniería inversa o interrumpir el sitio o el flujo de entrega.",
        "terms-s3-3": "Prohibida la reventa, redistribución no autorizada o publicación de descargas privadas, contraseñas o rutas ocultas.",
        "terms-s3-4": "Prohibido el acceso automatizado para eludir límites normales, reglas de sesión o protecciones de administrador.",
        "terms-s4-title": "4. Entrega y actualizaciones", "terms-s4-p": "La entrega se realiza digitalmente a través del sitio y canales de soporte relacionados. Las versiones de build, nombres de archivo, hashes y contenido incluido pueden cambiar conforme el producto se mantiene.",
        "terms-s5-title": "5. Disponibilidad e interrupciones", "terms-s5-p": "El servicio se proporciona de forma continua y mantenida, pero no se garantiza disponibilidad ininterrumpida. El sitio puede ser actualizado, limitado, movido detrás de servicios de protección o desconectado temporalmente.",
        "terms-s6-title": "6. Propiedad intelectual", "terms-s6-p": "El contenido del sitio, marca, estructura, paquetes descargables y materiales relacionados son propiedad de Unez. No puedes republicar, reempaquetar, reflejar o vender estos materiales sin permiso escrito.",
        "terms-s7-title": "7. Limitación de responsabilidad", "terms-s7-p": "El servicio se proporciona como un producto digital mantenido, pero el uso del sitio, archivos entregados y cualquier configuración asociada es bajo tu propio riesgo. Unez no es responsable de daños indirectos, incidentales o consecuentes.",
        "terms-s7-note": "Si encuentras un problema de entrega o acceso, contacta al soporte primero para que el problema pueda ser revisado.",
        "terms-s8-title": "8. Cambios en estos términos", "terms-s8-p": "Estos términos pueden actualizarse conforme cambian el sitio, el modelo de entrega o el proceso de soporte. La última versión publicada en el sitio rige el uso futuro desde la fecha en que se publica.",
        "terms-footer-title": "¿Necesitas el resto del conjunto legal?", "terms-footer-p": "La Privacidad explica qué datos se registran en visitas, descargas y acceso administrativo protegido en el sitio.",
        "privacy-page-title": "Política de Privacidad",
        "privacy-hero-p": "Esta página explica qué datos se registran cuando alguien visita el sitio de Unez, abre rutas protegidas o descarga un archivo. La política está escrita para coincidir con las herramientas de análisis y administración actualmente en uso.",
        "privacy-meta-1": `Última actualización: ${dateES}`, "privacy-meta-2": "Análisis de tráfico activado", "privacy-meta-3": "Ventana de almacenamiento en hora de Moscú",
        "privacy-summary-title": "Qué se recopila",
        "privacy-summary-1": "Eventos de visita, eventos de descarga, hora de solicitud y página o archivo solicitado.",
        "privacy-summary-2": "Dirección IP, país, región, ciudad e información del proveedor derivada del IP.",
        "privacy-summary-3": "User-agent del navegador, referenciador básico o fuente, y datos de sesión para acceso administrativo protegido.",
        "privacy-summary-4": "Almacenamiento de registros rotativos cortos para soporte, diagnóstico, monitoreo de abuso y salud del sitio.",
        "privacy-glance-title": "De un vistazo",
        "privacy-glance-purpose-label": "Propósito", "privacy-glance-purpose-val": "Análisis, prevención de abuso, revisión de soporte y visibilidad de entrega de descargas.",
        "privacy-glance-admin-label": "Visibilidad solo para administradores", "privacy-glance-admin-val": "Los registros detallados se almacenan para el panel del propietario y exportaciones.",
        "privacy-glance-edge-label": "Edge de terceros", "privacy-glance-edge-val": "El tráfico puede pasar por Cloudflare y la infraestructura de alojamiento estándar.",
        "privacy-s1-title": "1. Análisis de visitas y descargas", "privacy-s1-p": "Cuando el sitio se abre a través de su punto de entrada principal, se puede registrar un evento de visita. Cuando se sirve un archivo a través de la ruta de descarga, se puede registrar un evento de descarga.",
        "privacy-s2-title": "2. Datos de ubicación derivados del IP", "privacy-s2-p": "El sitio puede resolver datos aproximados de país, región, ciudad y proveedor a partir de la dirección IP de un visitante. Esta información es aproximada y se usa para la visión general del tráfico y la detección de abuso.",
        "privacy-s3-title": "3. Referenciadores y datos del navegador", "privacy-s3-p": "Los valores de referenciador y user-agent pueden registrarse para mostrar de dónde vino el tráfico y qué familias de navegadores se están usando.",
        "privacy-s4-title": "4. Cookies y acceso administrativo protegido", "privacy-s4-p": "El área administrativa privada usa una cookie de sesión para mantener al propietario autenticado. Esa cookie se usa solo para continuidad de sesión, acceso a rutas ocultas y protección administrativa básica. No está destinada a publicidad.",
        "privacy-s5-title": "5. Cómo se usan los datos",
        "privacy-s5-1": "Para operar el sitio y entregar archivos.",
        "privacy-s5-2": "Para revisar fuentes de tráfico, distribución por país y cobertura de navegadores.",
        "privacy-s5-3": "Para investigar actividad sospechosa, raspado, solicitudes abusivas o fallas de entrega.",
        "privacy-s5-4": "Para ayudar al soporte a diagnosticar por qué un usuario no puede acceder o descargar un archivo.",
        "privacy-s6-title": "6. Compartir y divulgación", "privacy-s6-p": "Unez no publica registros de log privados públicamente. El tráfico puede ser procesado por proveedores de infraestructura como el entorno de alojamiento, el edge de entrega de contenido o proveedores de seguridad y DNS necesarios para operar el sitio.",
        "privacy-s7-title": "7. Retención", "privacy-s7-p": "Los registros de actividad se almacenan en una ventana local rotativa para visibilidad operacional reciente en lugar de historial público indefinido.",
        "privacy-s7-note": "El build actual mantiene un historial rotativo limitado para visitas y descargas en lugar de registro permanente ilimitado.",
        "privacy-s8-title": "8. Contacto y actualizaciones de la política", "privacy-s8-p": "Esta política de privacidad puede actualizarse conforme cambian el stack del sitio, el modelo de análisis o el proceso de soporte. La versión publicada en el sitio es la versión controladora actual.",
        "privacy-footer-title": "Documentos relacionados", "privacy-footer-p": "Los Términos explican las reglas de acceso y uso del servicio en el sitio, entrega del launcher y comunicación de soporte.",
    },
    zh: {
        "nav-games": "支持的游戏", "nav-sequence": "启动序列", "nav-download": "下载启动器",
        "hero-eyebrow": "在线", "hero-text-1": "干净的启动器。快速设置。一切尽在一个地方。",
        "hero-text-2": "下载、切换配置文件，并在支持的游戏之间轻松移动，没有往常的杂乱。",
        "btn-download": "下载启动器", "btn-discord": "加入 Discord",
        "btn-copy": "复制密码", "btn-copy-success": "已复制！", "btn-copy-failure": "失败",
        "btn-copy-sha": "复制 SHA256", "btn-copy-sha-success": "已复制！", "btn-copy-sha-failure": "失败",
        "highlight-1": "即时更新和安全回滚", "highlight-2": "一个启动器，多个游戏",
        "highlight-3": "智能过滤器，已验证的模组", "highlight-4": "密码 - Unez",
        "integrity-title": "文件完整性", "integrity-subtitle": "从当前启动器存档中提取的实时包元数据。",
        "integrity-verified": "已验证构建", "integrity-version-label": "版本", "integrity-version-val": versionBuild,
        "integrity-updated-label": "最后更新", "integrity-updated-val": dateIntegrity, "integrity-size-label": "文件大小",
        "integrity-hash-label": "SHA256 指纹", "integrity-hash-hint": "使用下面的精确校验和来验证当前存档。",
        "games-eyebrow": "支持的游戏", "games-title": "支持的游戏",
        "games-desc-1": "一个强大的启动器。九款完全支持的游戏。",
        "games-desc-2": "所有游戏在单一统一界面中运行——干净、稳定，并可即时切换配置文件。",
        "game-status": "在线",
        "game-roblox-desc": "Xeno 是下一代 Roblox 脚本执行器，具有现代代码编辑器、多标签支持和闪电般快速的注入功能。",
        "game-cs2-desc": "在 CS2 中释放神级视野。人性化瞄准辅助、智能扳机、高级透视、实时雷达、无后坐力和兔跳。即时加载，零 FPS 下降。",
        "game-gtav-desc": "通过这个外部 FiveM 模组菜单主宰 GTA V 服务器，具有 ESP、瞄准辅助、载具生成器等功能，同时保持不被检测。",
        "game-r6s-desc": "在彩虹六号中释放神级视野。智能瞄准辅助、透视 ESP、实时雷达、无后坐力和静默瞄准。持续更新以对抗 BattleEye。",
        "game-pubg-desc": "下一代内部 PUBG 外挂：即时注入，零 FPS 下降。流畅瞄准辅助、快速扳机、高级 ESP 透视、实时雷达、无后坐力和兔跳。",
        "game-osu-desc": "下一代内部 osu! 外挂：即时注入，零性能损失。完美瞄准辅助、放松模式、时间扭曲和旋转机器人。",
        "game-rust-desc": "下一代内部 Rust 外挂：即时注入，零 FPS 下降。流畅瞄准辅助、高级 ESP 透视，显示玩家、战利品、动物、陷阱和矿石。",
        "game-valorant-desc": "以神级视野游戏。下一代作弊技术：透视、瞄准辅助和雷达——全在一个精致的包中。",
        "game-fortnite-desc": "下一代内部 Fortnite 外挂：即时注入，零 FPS 下降。流畅瞄准辅助、高级 ESP、扳机、无后坐力、自动建造和静默瞄准。",
        "tag-quick-load": "快速加载", "tag-clean-workspace": "干净界面", "tag-stable-route": "稳定路线",
        "tag-unified-config": "统一配置", "tag-gtav": "GTA V", "tag-fivem": "FiveM",
        "tag-fast-access": "快速访问", "tag-focused-stack": "专注堆栈", "tag-low-friction": "低摩擦",
        "tag-direct-route": "直接路线", "tag-fast-open": "快速打开", "tag-minimal-surface": "最小界面",
        "tag-quick-access": "快速访问", "tag-organized-options": "有序选项",
        "tag-polished-layout": "精致布局", "tag-consistent-shell": "一致外壳",
        "tag-main-catalog": "主目录", "tag-fast-path": "快速路径",
        "game-dbd-desc": "专为黎明杀机打造的高质量内部外挂。干净的视觉效果，流畅的游戏体验，功能强大。完美适配杀手和幸存者两侧。智能瞄准辅助、玩家 ESP、2D 雷达、世界 ESP。",
        "tag-dbd-1": "杀手 & 幸存者", "tag-dbd-2": "玩家 ESP",
        "game-apex-desc": "Apex 英雄高级外挂。瞄准辅助、ESP、透视和雷达黑客全套配置。保持不被检测，横扫每个大厅。",
        "tag-apex-1": "透视", "tag-apex-2": "雷达黑客",
        "game-marvel-desc": "以下一代瞄准辅助主宰漫威对决竞技场。超精准瞄准、技能追踪 AI 和实时敌人预测。专有反检测框架，零延迟，最高效率。",
        "tag-marvel-1": "AI 瞄准辅助", "tag-marvel-2": "反检测",
        "sequence-eyebrow": "启动序列", "sequence-title": "简单流程。更多态度。",
        "sequence-desc": "结构保持简短明了，而视觉效果更接近命令控制台的感觉。",
        "step1-title": "获取最新构建", "step1-desc": "主要按钮将用户直接发送到下载路径，无需额外步骤。",
        "step2-title": "解锁包", "step2-desc": "密码操作只需一次点击，视觉上保持次要位置。",
        "step3-title": "进入启动器", "step3-desc": "页面将构建框架为私人控制面板，而不是通用着陆页。",
        "deploy-eyebrow": "准备部署", "deploy-title": "相同的下载路径。更强的视觉冲击。",
        "footer-nav-title": "导航", "footer-home": "首页", "footer-legal-title": "法律",
        "footer-terms": "服务条款", "footer-privacy": "隐私政策",
        "modal-eyebrow": "下载已开始", "modal-title": "Unez 启动器安装指南",
        "modal-lead": "您的文件应该会自动开始下载。文件下载完成后，请按照以下步骤操作。",
        "modal-steps-title": "安装步骤", "modal-step-1": "从 UnezCheats.live 下载最新的启动器。",
        "modal-step-2": "使用密码解压存档：Unez。", "modal-step-3": "完全禁用您的杀毒软件。",
        "modal-step-4": "以管理员身份运行启动器。", "modal-step-5": "选择所需的游戏并注入。",
        "modal-notes-title": "建议注意事项", "modal-note-1": "建议使用 Windows 10 22H2 或 Windows 11 23H2/24H2。",
        "modal-note-2": "在 BIOS 中禁用安全启动和虚拟化。", "modal-note-3": "不要在虚拟机上使用。",
        "modal-note-4-prefix": "如果遇到问题，请加入我们的", "modal-note-4-link": "Discord", "modal-close": "关闭",
        "legal-terms-tab": "条款", "legal-privacy-tab": "隐私",
        "terms-page-title": "服务条款", "terms-hero-p": "这些条款解释了如何提供对 Unez 网站、启动器、下载、支持渠道和相关服务的访问。通过使用本网站或请求访问，您同意以下条款。",
        "terms-meta-1": `最后更新: ${dateZH}`, "terms-meta-2": "仅数字访问", "terms-meta-3": "莫斯科时间运营",
        "terms-summary-title": "快速摘要", "terms-summary-1": "访问权限仅授予与此处列出的交付和支持条款相关的个人使用。", "terms-summary-2": "用户负责保持其系统、凭据和下载文件的安全。", "terms-summary-3": "服务可用性、发布和更新节奏可能会在不通知的情况下更改。", "terms-summary-4": "滥用、转售、欺诈性付款活动或对服务的攻击可能导致暂停。",
        "terms-glance-title": "概览", "terms-glance-op-label": "运营商", "terms-glance-op-val": "Unez Cheats", "terms-glance-scope-label": "范围", "terms-glance-scope-val": "网站、启动器交付、更新访问和支持通信。", "terms-glance-region-label": "地区", "terms-glance-region-val": "全球数字交付。内部时间以莫斯科时间跟踪。",
        "terms-s1-title": "1. 服务范围", "terms-s1-p": "Unez 提供对网站、下载交付和围绕其基于启动器的软件的支持材料的访问。网站内容、文件结构、发布说明、可用性和访问流程可能随时间推移而发展。",
        "terms-s2-title": "2. 资格和账户责任", "terms-s2-p": "您负责访问网站、存储下载文件和管理提供给您的任何凭据或密码的环境。如果您共享私人访问详细信息或失去对设备的控制，该风险由您承担。",
        "terms-s3-title": "3. 可接受的使用", "terms-s3-1": "禁止拒付滥用、付款欺诈、冒充或故意虚假的支持声明。", "terms-s3-2": "禁止尝试攻击、抓取、超载、逆向工程或破坏网站或交付流程。", "terms-s3-3": "禁止转售、未经授权的重新分发或发布私人下载、密码或隐藏路由。", "terms-s3-4": "禁止旨在绕过正常限制、会话规则或管理员保护的自动访问。",
        "terms-s4-title": "4. 交付和更新", "terms-s4-p": "交付通过网站和相关支持渠道以数字方式处理。随着产品的维护，构建版本、存档名称、文件哈希、更新时间和包含的内容可能会发生变化。",
        "terms-s5-title": "5. 可用性和停机时间", "terms-s5-p": "该服务以持续、维护的方式提供，但不保证不间断可用。网站可能会更新、限速、移至保护服务后面或因维护而暂时下线。",
        "terms-s6-title": "6. 知识产权", "terms-s6-p": "网站内容、品牌、结构、可下载软件包和相关材料均为 Unez 的财产。未经书面许可，您不得重新发布、重新打包、镜像或出售这些材料。",
        "terms-s7-title": "7. 责任限制", "terms-s7-p": "该服务作为维护的数字产品提供，但使用网站、交付文件和任何相关设置的风险由您自行承担。在适用法律允许的最大范围内，Unez 不对间接、偶发或后果性损害承担责任。",
        "terms-s7-note": "如果您遇到交付或访问问题，应首先联系支持以便可以审查该问题。",
        "terms-s8-title": "8. 这些条款的变更", "terms-s8-p": "这些条款可能会随着网站、交付模式或支持流程的变化而更新。网站上发布的最新版本从发布之日起管辖未来的使用。",
        "terms-footer-title": "需要完整的法律文件集？", "terms-footer-p": "隐私政策解释了在网站的访问、下载和受保护的管理员访问中记录了哪些数据。",
        "privacy-page-title": "隐私政策", "privacy-hero-p": "本页说明当有人访问 Unez 网站、打开受保护路由或下载文件时记录了哪些数据。该政策旨在与目前在网站上运行的实际分析和管理工具相匹配。",
        "privacy-meta-1": `最后更新: ${dateZH}`, "privacy-meta-2": "流量分析已启用", "privacy-meta-3": "存储窗口在莫斯科时间",
        "privacy-summary-title": "收集的内容", "privacy-summary-1": "访问事件、下载事件、请求时间以及请求的页面或文件。", "privacy-summary-2": "IP 地址、国家、地区、城市以及从 IP 派生的提供商信息。", "privacy-summary-3": "浏览器用户代理、基本引荐来源或来源，以及受保护管理员访问的会话数据。", "privacy-summary-4": "用于支持、诊断、滥用监控和网站健康的短滚动日志存储。",
        "privacy-glance-title": "概览", "privacy-glance-purpose-label": "目的", "privacy-glance-purpose-val": "分析、滥用预防、支持审查和下载交付可见性。", "privacy-glance-admin-label": "仅限管理员可见", "privacy-glance-admin-val": "详细日志存储在私有所有者仪表板和导出中。", "privacy-glance-edge-label": "第三方边缘", "privacy-glance-edge-val": "流量可能通过 Cloudflare 和标准托管基础设施传递。",
        "privacy-s1-title": "1. 访问和下载分析", "privacy-s1-p": "当网站通过其主要入口点打开时，可能会记录访问事件。当通过下载路由提供文件时，可能会记录下载事件。这些记录有助于跟踪交付健康状况并了解流量来源。",
        "privacy-s2-title": "2. IP 派生的位置数据", "privacy-s2-p": "该网站可能使用标准 IP 地理查找服务从访问者 IP 地址解析近似的国家、地区、城市和提供商数据。此信息是近似的，用于流量概述和滥用检测。",
        "privacy-s3-title": "3. 引荐来源和浏览器数据", "privacy-s3-p": "引荐来源和用户代理值可能会被记录，以显示流量来自何处以及正在使用哪些浏览器系列。这有助于调试、兼容性审查和衡量哪些渠道实际上在向网站发送流量。",
        "privacy-s4-title": "4. Cookie 和受保护的管理员访问", "privacy-s4-p": "私有管理员区域使用会话 cookie 在成功的门控和登录流程后保持所有者的身份验证。该 cookie 仅用于会话连续性、隐藏路由访问和基本管理员保护。它不用于广告。",
        "privacy-s5-title": "5. 数据的使用方式", "privacy-s5-1": "用于操作网站和交付文件。", "privacy-s5-2": "用于审查流量来源、国家分布和浏览器覆盖率。", "privacy-s5-3": "用于调查可疑活动、抓取、滥用请求或交付失败。", "privacy-s5-4": "用于帮助支持诊断为什么用户无法访问或下载文件。",
        "privacy-s6-title": "6. 共享和披露", "privacy-s6-p": "Unez 不公开发布私人日志记录。但是，流量可能由托管环境、内容交付边缘或运营网站所需的标准 DNS 和安全供应商等基础设施提供商处理。",
        "privacy-s7-title": "7. 保留", "privacy-s7-p": "活动日志存储在滚动本地窗口中，用于近期操作可见性，而不是无限期的公共历史记录。", "privacy-s7-note": "当前构建保留了访问和下载的有限滚动历史，而不是无限永久日志记录。",
        "privacy-s8-title": "8. 联系和政策更新", "privacy-s8-p": "本隐私政策可能会随着网站堆栈、分析模型或支持流程的变化而更新。网站上发布的版本是当前控制版本。",
        "privacy-footer-title": "相关文件", "privacy-footer-p": "条款解释了网站上访问和服务使用、启动器交付和支持通信的规则。",
    },
    ru: {
        "nav-games": "Поддерживаемые Игры", "nav-sequence": "Последовательность Запуска", "nav-download": "Скачать Лаунчер",
        "hero-eyebrow": "Онлайн", "hero-text-1": "Чистый лаунчер. Быстрая настройка. Все в одном месте.",
        "hero-text-2": "Скачивайте, переключайте профили и перемещайтесь по поддерживаемым играм без лишних сложностей.",
        "btn-download": "Скачать Лаунчер", "btn-discord": "Присоединиться к Discord",
        "btn-copy": "Копировать Пароль", "btn-copy-success": "Скопировано!", "btn-copy-failure": "Ошибка",
        "btn-copy-sha": "Копировать SHA256", "btn-copy-sha-success": "Скопировано!", "btn-copy-sha-failure": "Ошибка",
        "highlight-1": "Мгновенные обновления и безопасные откаты", "highlight-2": "Один лаунчер, много игр",
        "highlight-3": "Умные фильтры, проверенные моды", "highlight-4": "Пароль - Unez",
        "integrity-title": "Целостность файла", "integrity-subtitle": "Метаданные текущего пакета из архива лаунчера.",
        "integrity-verified": "Сборка проверена", "integrity-version-label": "Версия", "integrity-version-val": versionBuild,
        "integrity-updated-label": "Последнее обновление", "integrity-updated-val": dateIntegrity, "integrity-size-label": "Размер файла",
        "integrity-hash-label": "SHA256 отпечаток", "integrity-hash-hint": "Используйте точную контрольную сумму ниже для проверки архива.",
        "games-eyebrow": "Поддерживаемые игры", "games-title": "Поддерживаемые Игры",
        "games-desc-1": "Один мощный лаунчер. Девять полностью поддерживаемых игр.",
        "games-desc-2": "Все игры работают в едином интерфейсе — чистом, стабильном, с мгновенным переключением между профилями.",
        "game-status": "Онлайн",
        "game-roblox-desc": "Xeno — исполнитель скриптов Roblox нового поколения с современным редактором кода, поддержкой нескольких вкладок и молниеносной инъекцией.",
        "game-cs2-desc": "Раскройте Бога Видение в CS2. Гуманизированный Aimbot, умный Triggerbot, продвинутый Wallhack, живой Radar, без отдачи и Bunny Hop. Мгновенная загрузка, нулевое падение FPS.",
        "game-gtav-desc": "Доминируйте на серверах GTA V с этим внешним мод-меню FiveM с ESP, аймботом, спаунером транспортных средств и многим другим.",
        "game-r6s-desc": "Раскройте Бога Видение в Rainbow Six Siege. Умный Aimbot, Wallhack ESP, радар в реальном времени, без отдачи и Silent Aim. Постоянно обновляется против BattleEye.",
        "game-pubg-desc": "Внутренний чит PUBG нового поколения: мгновенная инъекция, нулевое падение FPS. Плавный Aimbot, быстрый Triggerbot, продвинутый ESP, живой Radar, без отдачи и разброса.",
        "game-osu-desc": "Внутренний чит osu! нового поколения: мгновенная инъекция, нулевая потеря производительности. Идеальная помощь в прицеливании, расслабленный режим, таймварп и спинбот.",
        "game-rust-desc": "Внутренний чит Rust нового поколения: мгновенная инъекция, нулевое падение FPS. Плавный Aimbot, продвинутый ESP с игроками, лутом, животными, ловушками и рудами.",
        "game-valorant-desc": "Играйте с Богом Видением. Технология читов нового поколения: Wallhack, аймбот и радар — всё в одном пакете.",
        "game-fortnite-desc": "Внутренний чит Fortnite нового поколения: мгновенная инъекция, нулевое падение FPS. Плавный Aimbot, продвинутый ESP, Triggerbot, без отдачи, Auto Build и Silent Aim.",
        "tag-quick-load": "Быстрая загрузка", "tag-clean-workspace": "Чистый интерфейс", "tag-stable-route": "Стабильный маршрут",
        "tag-unified-config": "Единая конфигурация", "tag-gtav": "GTA V", "tag-fivem": "FiveM",
        "tag-fast-access": "Быстрый доступ", "tag-focused-stack": "Фокусированный стек", "tag-low-friction": "Минимум усилий",
        "tag-direct-route": "Прямой маршрут", "tag-fast-open": "Быстрое открытие", "tag-minimal-surface": "Минимальная поверхность",
        "tag-quick-access": "Быстрый доступ", "tag-organized-options": "Организованные опции",
        "tag-polished-layout": "Отполированный макет", "tag-consistent-shell": "Единый интерфейс",
        "tag-main-catalog": "Основной каталог", "tag-fast-path": "Быстрый путь",
        "game-dbd-desc": "Высококачественный внутренний чит для Dead by Daylight. Чистая визуализация, плавный геймплей и мощные функции. Идеально подходит для обеих сторон — Убийцы и Выжившего. Умный аймбот, ESP игроков, 2D-радар, мировой ESP.",
        "tag-dbd-1": "Убийца & Выживший", "tag-dbd-2": "ESP игроков",
        "game-apex-desc": "Премиум-читы для Apex Legends. Доминируйте с аймботом, ESP, валхаком и радар-хаком. Оставайтесь необнаруженными и уничтожайте каждое лобби.",
        "tag-apex-1": "Валхак", "tag-apex-2": "Радар-хак",
        "game-marvel-desc": "Доминируйте на арене с помощью прицеливания нового поколения для Marvel Rivals. Сверхточное прицеливание, ИИ отслеживания способностей и предсказание врагов в реальном времени. Фирменная антидетекция, нулевой лаг, максимальная эффективность.",
        "tag-marvel-1": "ИИ прицеливания", "tag-marvel-2": "Антидетекция",
        "sequence-eyebrow": "Последовательность запуска", "sequence-title": "Простой поток. Больше стиля.",
        "sequence-desc": "Структура остаётся короткой и понятной, а визуальный стиль приближается к консоли управления.",
        "step1-title": "Получите актуальную сборку", "step1-desc": "Основная кнопка отправляет пользователей прямо на путь загрузки без лишних шагов.",
        "step2-title": "Разблокируйте пакет", "step2-desc": "Действие с паролем находится в одном клике и остаётся визуально второстепенным.",
        "step3-title": "Войдите в лаунчер", "step3-desc": "Страница представляет сборку как частную панель управления вместо типичного лендинга.",
        "deploy-eyebrow": "Готово к развёртыванию", "deploy-title": "Тот же путь загрузки. Более сильный визуальный удар.",
        "footer-nav-title": "Навигация", "footer-home": "Главная", "footer-legal-title": "Правовая информация",
        "footer-terms": "Условия использования", "footer-privacy": "Политика конфиденциальности",
        "modal-eyebrow": "Загрузка началась", "modal-title": "Руководство по установке лаунчера Unez",
        "modal-lead": "Ваш архив должен начать загружаться автоматически. Следуйте шагам ниже после завершения загрузки.",
        "modal-steps-title": "Шаги установки", "modal-step-1": "Скачайте последний лаунчер с UnezCheats.live.",
        "modal-step-2": "Распакуйте архив с паролем: Unez.", "modal-step-3": "Полностью отключите антивирус.",
        "modal-step-4": "Запустите лаунчер от имени Администратора.", "modal-step-5": "Выберите нужную игру и выполните инъекцию.",
        "modal-notes-title": "Рекомендуемые заметки", "modal-note-1": "Рекомендуется Windows 10 22H2 или Windows 11 23H2/24H2.",
        "modal-note-2": "Отключите Secure Boot и Виртуализацию в BIOS.", "modal-note-3": "Не используйте на виртуальных машинах.",
        "modal-note-4-prefix": "Если возникнут проблемы, присоединитесь к нашему", "modal-note-4-link": "Discord", "modal-close": "Закрыть",
        "legal-terms-tab": "Условия", "legal-privacy-tab": "Конфиденциальность",
        "terms-page-title": "Условия использования", "terms-hero-p": "Эти условия объясняют, как предоставляется доступ к сайту Unez, лаунчеру, загрузкам, каналам поддержки и связанным услугам. Используя сайт или запрашивая доступ, вы соглашаетесь с приведёнными ниже условиями.",
        "terms-meta-1": `Последнее обновление: ${dateRU}`, "terms-meta-2": "Только цифровой доступ", "terms-meta-3": "Операции по московскому времени",
        "terms-summary-title": "Краткое резюме", "terms-summary-1": "Доступ предоставляется для личного использования в соответствии с условиями доставки и поддержки, перечисленными здесь.", "terms-summary-2": "Пользователи несут ответственность за сохранность своих систем, учётных данных и загруженных файлов.", "terms-summary-3": "Доступность сервиса, выпуски и периодичность обновлений могут изменяться без предварительного уведомления.", "terms-summary-4": "Злоупотребление, перепродажа, мошенническая платёжная деятельность или атаки на сервис могут привести к приостановке.",
        "terms-glance-title": "Кратко", "terms-glance-op-label": "Оператор", "terms-glance-op-val": "Unez Cheats", "terms-glance-scope-label": "Область применения", "terms-glance-scope-val": "Сайт, доставка лаунчера, доступ к обновлениям и поддержка.", "terms-glance-region-label": "Регион", "terms-glance-region-val": "Всемирная цифровая доставка. Внутреннее время отслеживается по московскому.",
        "terms-s1-title": "1. Область применения услуги", "terms-s1-p": "Unez предоставляет доступ к сайту, доставке загрузок и материалам поддержки своего программного обеспечения на основе лаунчера. Содержимое сайта, структура файлов, примечания к выпускам, доступность и процесс доступа могут развиваться с течением времени.",
        "terms-s2-title": "2. Право на использование и ответственность за аккаунт", "terms-s2-p": "Вы несёте ответственность за среду, в которой вы получаете доступ к сайту, храните загруженные файлы и управляете учётными данными или паролями. Если вы делитесь данными доступа, теряете контроль над устройством или раскрываете загрузочный пакет, этот риск остаётся за вами.",
        "terms-s3-title": "3. Допустимое использование", "terms-s3-1": "Запрещено злоупотребление возвратом платежей, платёжное мошенничество, самозванство или заведомо ложные обращения в поддержку.", "terms-s3-2": "Запрещены попытки атаковать, парсить, перегружать, реверс-инжинирить или нарушать работу сайта или процесса доставки.", "terms-s3-3": "Запрещена перепродажа, несанкционированное распространение или публикация приватных загрузок, паролей или скрытых маршрутов.", "terms-s3-4": "Запрещён автоматизированный доступ с целью обхода обычных ограничений, правил сессий или защиты администратора.",
        "terms-s4-title": "4. Доставка и обновления", "terms-s4-p": "Доставка осуществляется в цифровом виде через сайт и связанные каналы поддержки. Версии сборок, имена архивов, хэши файлов, сроки обновления и включённое содержимое могут изменяться по мере обслуживания продукта.",
        "terms-s5-title": "5. Доступность и простои", "terms-s5-p": "Услуга предоставляется на постоянной, обслуживаемой основе, но бесперебойная доступность не гарантируется. Сайт может быть обновлён, ограничен, перемещён за защитные сервисы или временно отключён.",
        "terms-s6-title": "6. Интеллектуальная собственность", "terms-s6-p": "Тексты сайта, брендинг, структура, загружаемые пакеты и связанные материалы остаются собственностью Unez. Вы не можете повторно публиковать, переупаковывать, копировать или продавать эти материалы без письменного разрешения.",
        "terms-s7-title": "7. Ограничение ответственности", "terms-s7-p": "Услуга предоставляется как обслуживаемый цифровой продукт, но использование сайта, доставленных файлов и любой связанной настройки осуществляется на ваш страх и риск. В максимально допустимой законом степени Unez не несёт ответственности за косвенные, случайные или последующие убытки.",
        "terms-s7-note": "Если вы столкнулись с проблемой доставки или доступа, сначала обратитесь в поддержку, чтобы проблему можно было изучить.",
        "terms-s8-title": "8. Изменения этих условий", "terms-s8-p": "Эти условия могут обновляться по мере изменения сайта, модели доставки или процесса поддержки. Последняя опубликованная версия на сайте регулирует будущее использование с даты её публикации.",
        "terms-footer-title": "Нужен весь юридический набор?", "terms-footer-p": "Конфиденциальность объясняет, какие данные регистрируются при посещениях, загрузках и защищённом административном доступе на сайте.",
        "privacy-page-title": "Политика конфиденциальности", "privacy-hero-p": "На этой странице объясняется, какие данные регистрируются, когда кто-то посещает сайт Unez, открывает защищённые маршруты или загружает файл. Политика написана в соответствии с фактическими инструментами аналитики и администрирования, работающими на сайте.",
        "privacy-meta-1": `Последнее обновление: ${dateRU}`, "privacy-meta-2": "Аналитика трафика включена", "privacy-meta-3": "Окно хранения по московскому времени",
        "privacy-summary-title": "Что собирается", "privacy-summary-1": "События посещения, события загрузки, время запроса и запрошенная страница или файл.", "privacy-summary-2": "IP-адрес, страна, регион, город и информация о провайдере, полученная из IP.", "privacy-summary-3": "Браузерный user-agent, базовый реферер или источник, и данные сессии для защищённого административного доступа.", "privacy-summary-4": "Кратковременное скользящее хранилище журналов для поддержки, диагностики, мониторинга злоупотреблений и работоспособности сайта.",
        "privacy-glance-title": "Кратко", "privacy-glance-purpose-label": "Цель", "privacy-glance-purpose-val": "Аналитика, предотвращение злоупотреблений, проверка поддержки и видимость доставки загрузок.", "privacy-glance-admin-label": "Видимость только для администратора", "privacy-glance-admin-val": "Подробные журналы хранятся для приватной панели владельца и экспортов.", "privacy-glance-edge-label": "Сторонний edge", "privacy-glance-edge-val": "Трафик может проходить через Cloudflare и стандартную хостинговую инфраструктуру.",
        "privacy-s1-title": "1. Аналитика посещений и загрузок", "privacy-s1-p": "При открытии сайта через его основную точку входа может регистрироваться событие посещения. При подаче файла через маршрут загрузки может регистрироваться событие загрузки. Эти записи помогают отслеживать работоспособность доставки и понимать источники трафика.",
        "privacy-s2-title": "2. Данные о местоположении, полученные из IP", "privacy-s2-p": "Сайт может определять приблизительные данные о стране, регионе, городе и провайдере из IP-адреса посетителя. Эта информация приблизительна и используется для обзора трафика и обнаружения злоупотреблений.",
        "privacy-s3-title": "3. Реферы и данные браузера", "privacy-s3-p": "Значения реферера и user-agent могут регистрироваться, чтобы показать, откуда пришёл трафик и какие семейства браузеров используются. Это помогает с отладкой, проверкой совместимости и измерением каналов трафика.",
        "privacy-s4-title": "4. Cookies и защищённый административный доступ", "privacy-s4-p": "Приватная административная область использует сессионный cookie для поддержания аутентификации владельца после успешного входа. Этот cookie используется только для непрерывности сессии, доступа к скрытым маршрутам и базовой административной защиты. Он не предназначен для рекламы.",
        "privacy-s5-title": "5. Как используются данные", "privacy-s5-1": "Для работы сайта и доставки файлов.", "privacy-s5-2": "Для проверки источников трафика, распределения по странам и охвата браузеров.", "privacy-s5-3": "Для расследования подозрительной активности, парсинга, злоупотребительных запросов или сбоев доставки.", "privacy-s5-4": "Чтобы помочь поддержке диагностировать, почему пользователь не может получить доступ или загрузить файл.",
        "privacy-s6-title": "6. Передача и раскрытие данных", "privacy-s6-p": "Unez не публикует приватные записи журналов публично. Однако трафик может обрабатываться провайдерами инфраструктуры, такими как хостинговая среда, edge доставки контента или стандартные поставщики DNS и безопасности.",
        "privacy-s7-title": "7. Хранение", "privacy-s7-p": "Журналы активности хранятся в скользящем локальном окне для недавней операционной видимости, а не в виде бессрочной публичной истории.", "privacy-s7-note": "Текущая сборка сохраняет ограниченную скользящую историю посещений и загрузок вместо неограниченного постоянного ведения журнала.",
        "privacy-s8-title": "8. Контакт и обновления политики", "privacy-s8-p": "Эта политика конфиденциальности может обновляться по мере изменения стека сайта, модели аналитики или процесса поддержки. Версия, опубликованная на сайте, является текущей контролирующей версией.",
        "privacy-footer-title": "Связанные документы", "privacy-footer-p": "Условия объясняют правила доступа и использования сервиса на сайте, доставки лаунчера и поддержки.",
    }
};

function detectSystemLanguage() {
    const lang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (lang.startsWith("pt")) return "pt-br";
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("zh")) return "zh";
    if (lang.startsWith("ru")) return "ru";
    return "en";
}

function getInitialLanguage() {
    const saved = localStorage.getItem("language");
    if (saved && translations[saved]) return saved;
    return detectSystemLanguage();
}

let currentLang = "en";

function applyLanguage(lang) {
    if (!translations[lang]) lang = "en";
    currentLang = lang;
    const t = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.documentElement.lang = lang === "pt-br" ? "pt-BR" : lang;
    localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a').forEach(link => {
        const i18n = link.getAttribute('data-i18n');
        if (i18n === 'nav-download' || i18n === 'btn-download' || (link.href && link.href.includes("github.com"))) {
            link.href = CONFIG.downloadLink;
        }
    });
    
    
    const langSelector = document.getElementById("lang-selector");
    if (langSelector) {
        langSelector.addEventListener("change", (e) => applyLanguage(e.target.value));
        const savedLang = localStorage.getItem("language") || "en";
        langSelector.value = savedLang;
        applyLanguage(savedLang);
    }
});


function initCopyButtons() {
    document.querySelectorAll("[data-copy-text]").forEach(button => {
        if (button._copyInit) return;
        button._copyInit = true;
        const copyValue = button.getAttribute("data-copy-text") || "";
        const successKey = button.getAttribute("data-copy-success-key") || "btn-copy-success";
        const failureKey = button.getAttribute("data-copy-failure-key") || "btn-copy-failure";

        button.addEventListener("click", async () => {
            if (!copyValue) return;
            const originalLabel = button.textContent.trim();
            const t = translations[currentLang] || translations.en;
            try {
                await navigator.clipboard.writeText(copyValue);
                button.textContent = t[successKey] || "Copied!";
                button.classList.add("is-copied");
                announce(t[successKey] || "Copied!");
                setTimeout(() => {
                    button.textContent = originalLabel;
                    button.classList.remove("is-copied");
                }, 1800);
            } catch {
                button.textContent = t[failureKey] || "Failed";
                setTimeout(() => { button.textContent = originalLabel; }, 1800);
            }
        });
    });
}

function announce(message) {
    const el = document.getElementById("sr-announce");
    if (!el) return;
    el.textContent = "";
    requestAnimationFrame(() => { el.textContent = message; });
}

const downloadModal = document.querySelector("[data-download-modal]");
const downloadLinks = Array.from(document.querySelectorAll('[data-i18n="nav-download"]'));
const downloadCloseTargets = Array.from(document.querySelectorAll("[data-download-close]"));
let lastFocusedDownloadLink = null;

const FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

function trapFocus(modal) {
    const focusable = Array.from(modal.querySelectorAll(FOCUSABLE));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    modal.addEventListener("keydown", function handler(e) {
        if (e.key !== "Tab") return;
        if (e.shiftKey) {
            if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
            if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
    });
    first.focus();
}

function closeDownloadModal() {
    if (!downloadModal) return;
    downloadModal.classList.remove("is-open");
    downloadModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    if (lastFocusedDownloadLink instanceof HTMLElement) lastFocusedDownloadLink.focus();
}

function openDownloadModal(trigger) {
    if (!downloadModal) return;
    lastFocusedDownloadLink = trigger instanceof HTMLElement ? trigger : null;
    downloadModal.classList.add("is-open");
    downloadModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    trapFocus(downloadModal);
}

if (downloadModal && downloadLinks.length > 0) {
    downloadLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            openDownloadModal(link);
            const fileUrl = link.getAttribute("href");
            if (fileUrl) {
                window.location.href = fileUrl;
            }
        });
    });
    
    downloadCloseTargets.forEach(node => node.addEventListener("click", closeDownloadModal));
    
    document.addEventListener("keydown", e => {
        if (e.key === "Escape" && downloadModal.classList.contains("is-open")) closeDownloadModal();
    });
}

const editorRoot = document.querySelector("[data-editor-root]");
if (editorRoot) {
    const editorBody = editorRoot.querySelector("[data-editor-body]");
    const editorTabs = Array.from(editorRoot.querySelectorAll("[data-editor-tab]"));

    const editorFiles = {
        "main.lua": [
            { type: "comment", text: "-- Launch profile bound to direct mode" },
            { tokens: [["keyword", "local"], ["plain", " studio "], ["operator", "="], ["plain", " "], ["function", "require"], ["plain", "("], ["string", '"Unez.core"'], ["plain", ")"]] },
            { type: "gap" },
            { tokens: [["plain", "studio."], ["function", "mount"], ["plain", "({"]] },
            { indent: true, tokens: [["plain", "channel "], ["operator", "="], ["plain", " "], ["string", '"live"'], ["plain", ","]] },
            { indent: true, tokens: [["plain", "titles "], ["operator", "="], ["plain", " "], ["number", "9"], ["plain", ","]] },
            { indent: true, tokens: [["plain", "delivery "], ["operator", "="], ["plain", " "], ["string", '"direct"'], ["plain", ","]] },
            { tokens: [["plain", "})"]] },
            { type: "gap" },
            { live: true, tokens: [["function", "print"], ["plain", "("], ["string", '"Launcher ready"'], ["plain", ")"]] }
        ],
        "config.json": [
            { tokens: [["plain", "{"]] },
            { indent: true, tokens: [["string", '"theme"'], ["plain", ": "], ["string", '"obsidian"'], ["plain", ","]] },
            { indent: true, tokens: [["string", '"password"'], ["plain", ": "], ["string", '"Unez"'], ["plain", ","]] },
            { indent: true, tokens: [["string", '"downloadRoute"'], ["plain", ": "], ["string", '"direct"'], ["plain", ","]] },
            { indent: true, tokens: [["string", '"supportedTitles"'], ["plain", ": "], ["number", "9"], ["plain", ","]] },
            { indent: true, live: true, tokens: [["string", '"buildStatus"'], ["plain", ": "], ["string", '"ready"']] },
            { tokens: [["plain", "}"]] }
        ],
        "init.lua": [
            { type: "comment", text: "-- Auto-load on launcher start" },
            { tokens: [["keyword", "local"], ["plain", " sync "], ["operator", "="], ["plain", " "], ["function", "require"], ["plain", "("], ["string", '"Unez.sync"'], ["plain", ")"]] },
            { type: "gap" },
            { tokens: [["plain", "sync."], ["function", "watch"], ["plain", "("], ["string", '"launcher.lua"'], ["plain", ", "], ["keyword", "function"], ["plain", "(file)"]] },
            { indent: true, tokens: [["function", "print"], ["plain", "("], ["string", '"[reload]"'], ["plain", ", file)"]] },
            { live: true, tokens: [["plain", "end)"]] }
        ]
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));
    let renderTicket = 0;

    async function typeInto(element, text, ticket) {
        for (const char of text) {
            if (ticket !== renderTicket) return false;
            element.textContent += char;
            await sleep(8);
        }
        return true;
    }

    async function renderEditor(tabName) {
        if (!editorBody || !editorFiles[tabName]) return;
        renderTicket++;
        const ticket = renderTicket;
        editorBody.innerHTML = "";
        for (const line of editorFiles[tabName]) {
            if (ticket !== renderTicket) return;
            if (line.type === "gap") {
                const gap = document.createElement("div");
                gap.className = "editor-gap";
                editorBody.appendChild(gap);
                continue;
            }
            const row = document.createElement("div");
            row.className = "editor-line";
            if (line.type === "comment") {
                row.classList.add("editor-line-comment");
                editorBody.appendChild(row);
                if (!(await typeInto(row, line.text || "", ticket))) return;
                continue;
            }
            if (line.indent) row.classList.add("editor-line-indent");
            if (line.live) row.classList.add("editor-line-live");
            editorBody.appendChild(row);
            for (const token of line.tokens || []) {
                const span = document.createElement("span");
                span.className = `token-${token[0]}`;
                row.appendChild(span);
                if (!(await typeInto(span, token[1], ticket))) return;
            }
            await sleep(26);
        }
    }

    function activateTab(tabName) {
        editorTabs.forEach(tab => {
            const active = tab.getAttribute("data-editor-tab") === tabName;
            tab.classList.toggle("is-active", active);
            tab.setAttribute("aria-selected", String(active));
        });
        void renderEditor(tabName);
    }

    editorTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const name = tab.getAttribute("data-editor-tab");
            if (name) activateTab(name);
        });
    });

    activateTab("main.lua");
}

const themeToggle = document.getElementById("theme-toggle");

function getInitialTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyTheme(theme) {
    document.body.classList.toggle("light-theme", theme === "light");
    if (themeToggle) {
        themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
        themeToggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    }
}

applyTheme(getInitialTheme());

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", e => {
    if (!localStorage.getItem("theme")) applyTheme(e.matches ? "light" : "dark");
});

const langSelector = document.getElementById("lang-selector");
const initialLang = getInitialLanguage();
if (langSelector) langSelector.value = initialLang;
if (langSelector) langSelector.addEventListener("change", e => applyLanguage(e.target.value));
applyLanguage(initialLang);
initCopyButtons();

const scrollProgress = document.querySelector(".scroll-progress");
const backToTop = document.getElementById("back-to-top");

function updateScroll() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    if (scrollProgress) scrollProgress.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
    if (backToTop) backToTop.hidden = scrolled < 400;
}

window.addEventListener("scroll", updateScroll, { passive: true });
updateScroll();

if (backToTop) {
    backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
const sections = Array.from(navLinks).map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(a => {
            a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
        });
    });
}, { rootMargin: "-30% 0px -60% 0px" });

sections.forEach(s => sectionObserver.observe(s));

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

const legalScrollProgress = document.querySelector(".scroll-progress");
const legalBackToTop = document.getElementById("back-to-top");

if (legalScrollProgress || legalBackToTop) {
    function updateLegalScroll() {
        const scrolled = window.scrollY;
        const total = document.documentElement.scrollHeight - window.innerHeight;
        if (legalScrollProgress) legalScrollProgress.style.width = total > 0 ? `${(scrolled / total) * 100}%` : "0%";
        if (legalBackToTop) legalBackToTop.hidden = scrolled < 300;
    }
    window.addEventListener("scroll", updateLegalScroll, { passive: true });
    updateLegalScroll();
    if (legalBackToTop) legalBackToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

const legalRevealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            legalRevealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.06 });

document.querySelectorAll(".reveal").forEach(el => legalRevealObserver.observe(el));

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('a').forEach(link => {
        const i18n = link.getAttribute('data-i18n');
        
        
        if (i18n === 'nav-download' || i18n === 'btn-download' || (link.href && link.href.includes("github.com"))) {
            link.href = CONFIG.downloadLink;
        }
    });
});