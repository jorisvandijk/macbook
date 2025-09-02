-- Lijst met apps die fullscreen moeten
local fullscreenApps = {
    "Firefox Developer Edition",
    "Mail",
    "Cursor",
    "Discord",
    "Finder",
    "kitty",
    "Notes",
    "Bitwarden",
    "GIMP",
    "UTM",
    
}

-- Functie: tijdelijke Escape-binding die fullscreen weer uitzet
local function bindTemporaryEscape(win)
    if not win then return end

    local escHotkey
    escHotkey = hs.hotkey.bind({}, "escape", function()
        if win and win:isFullScreen() then
            win:setFullScreen(false)
        end
        if escHotkey then
            escHotkey:delete()
            escHotkey = nil
        end
    end)

    -- Verwijder binding automatisch na 5 seconden
    hs.timer.doAfter(5, function()
        if escHotkey then
            escHotkey:delete()
            escHotkey = nil
        end
    end)
end

-- Functie: zet venster fullscreen als de app in de lijst staat
local function enforceFullscreen(win)
    if not win or not win:isStandard() then return end
    local app = win:application()
    if not app then return end

    local appName = app:name()
    for _, name in ipairs(fullscreenApps) do
        if appName == name then
            if not win:isFullScreen() then
                win:setFullScreen(true)
                bindTemporaryEscape(win)
            end
            break
        end
    end
end

-- Nieuwe vensters volgen
local wf = hs.window.filter.new(fullscreenApps)
wf:subscribe(hs.window.filter.windowCreated, enforceFullscreen)

-- Bestaande vensters fullscreen maken bij boot
for _, win in ipairs(hs.window.allWindows()) do
    enforceFullscreen(win)
end

hs.alert.show("Fullscreen manager actief")
