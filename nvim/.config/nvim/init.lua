-- ============================================================================
-- Neovim Configuration
-- ============================================================================

-- ============================================================================
-- Display Settings
-- ============================================================================

vim.opt.termguicolors = true    -- enable 24-bit RGB colors
vim.opt.number = true           -- show line numbers
vim.opt.relativenumber = true   -- show relative line numbers
vim.opt.scrolloff = 999         -- keep cursor centered vertically
vim.opt.guicursor = "n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50,a:blinkwait700-blinkoff400-blinkon250"

-- ============================================================================
-- Color Scheme
-- ============================================================================

vim.cmd.colorscheme("dracula")