# This file is used to localize about:support in Firefox.

# Firefox, as a brand name, should not be localized or transliterated.
brandShortName = Firefox

aboutSupport-pageTitle = Troubleshooting Information

# Don’t translate “supportLink”, it’s an ID used for CSS.
# The link points to https://support.mozilla.org
aboutSupport-pageSubtitle =
  | This page contains technical information that might be useful when you’re
  | trying to solve a problem. If you are looking for answers to common questions
  | about { brandShortName } check out our <a id="supportLink">support website</a>.

refreshProfile-title = Give { brandShortName } a tune up
refreshProfile-button = Refresh { brandShortName}…

aboutSupport-safeModeTitle = Try Safe Mode
# This string is used as a button label. Be aware of length issues compared to
# the section title.
aboutSupport-restartInSafeMode = Restart with Add-ons Disabled…

aboutSupport-copyRawDataToClipboard = Copy raw data to clipboard
aboutSupport-rawDataCopied = Raw data copied to clipboard

aboutSupport-copyTextToClipboard = Copy text to clipboard
aboutSupport-textCopied = Text copied to clipboard

aboutSupport-appBasicsTitle = Application Basics
aboutSupport-appBasicsName = Name
aboutSupport-appBasicsVersion = Version
aboutSupport-appBasicsBuildID = Build ID

# “Update” is a noun in this context. Strings refer to the channel used for
# updates (beta, nightly, etc.) and the history of installed updates.
[[updates]]
aboutSupport-appBasicsUpdateChannel = Update Channel
aboutSupport-appBasicsUpdateHistory = Update History
aboutSupport-appBasicsShowUpdateHistory = Show Update History

aboutSupport-appBasicsUserAgent = User Agent
aboutSupport-appBasicsOS = OS

# These messages are platform specific. For consistency make sure to adopt the
# same terminology used in each platform (Windows, Mac, Linux) for your
# language. For example, in English Windows and Mac use “Folder”, while Linux
# use “Directory”.
[[platform-messages]]
aboutSupport-appBasicsProfileDir = { OS() ->
  [win] Profile Folder
  [mac] Profile Folder
 *[other] Profile Directory
}
aboutSupport-showDir = { OS() ->
  [win] Show Folder
  [mac] Show in Finder
 *[other] Open Directory
}

aboutSupport-appBasicsEnabledPlugins = Enabled Plugins
aboutSupport-appBasicsBuildConfig = Build Configuration
aboutSupport-appBasicsMemoryUse = Memory Use
aboutSupport-appBasicsServiceWorkers = Registered Service Workers
aboutSupport-appBasicsMultiProcessSupport = Multiprocess Windows
aboutSupport-appBasicsSafeMode = Safe Mode
aboutSupport-appBasicsProfiles = Profiles

# This string displays the number of open multiprocess (e10s) windows compared
# to the overall number of open windows, and the current status of e10s in the
# browser.
# $remote (Number) - Number of multiprocess windows
# $total (Number)  - Total number of open windows
# $status (Number) - Code of the status of e10s in the browser. Used to select description part of the string.
# Example output: “2/2 (Enabled by default)”
aboutSupport-multiProcessWindows = { $remote }/{ $total } ({ $status ->
  [0] Enabled by user
  [1] Enabled by default
  [2] Disabled
  [4] Disabled by accessibility tools
  [5] Disabled by lack of graphics hardware acceleration on Mac OS X
  [6] Disabled by unsupported text input
  [7] Disabled by add-ons
  [8] Disabled forcibly
  [9] Disabled by graphics hardware acceleration on Windows
 *[other] Unknown status
})

# Number of days passed from the last recorded crash.
# $days (Number) - Number of days
aboutSupport-crashes-title = { PLURAL($days) ->
  [one] Crash Reports for the Last { $days } day
 *[other] Crash Reports for the Last { $days } days
}

aboutSupport-crashes-id = Report ID
aboutSupport-crashes-sendDate = Submitted
aboutSupport-crashes-allReports = All Crash Reports

# $num (Number) - Number of pending (not sent) crash reports
aboutSupport-crashes-noConfig =
  | This application has not been configured to display crash reports.
aboutSupport-crashes-pendingReports = { PLURAL($num) ->
  [one]
   | All Crash Reports (including { $num } pending crash in the given time range)
 *[other]
   | All Crash Reports (including { $num } pending crashes in the given time range)
}

aboutSupport-extensionsTitle = Extensions
aboutSupport-extensionName = Name
aboutSupport-extensionEnabled = Enabled
aboutSupport-extensionVersion = Version
aboutSupport-extensionId = ID

aboutSupport-graphicsTitle = Graphics
aboutSupport-graphicsFeaturesTitle = Features
aboutSupport-graphicsDiagnosticsTitle = Diagnostics
aboutSupport-graphicsFailureLogTitle = Failure Log
aboutSupport-graphicsGPU1Title = GPU #1
aboutSupport-graphicsGPU2Title = GPU #2
aboutSupport-graphicsDecisionLogTitle = Decision Log
aboutSupport-graphicsCrashGuardsTitle = Crash Guard Disabled Features
aboutSupport-graphicsWorkaroundsTitle = Workarounds
aboutSupport-graphics-apzNone = none
aboutSupport-graphics-wheelEnabled = wheel input enabled
aboutSupport-graphics-touchEnabled = touch input enabled
aboutSupport-graphics-dragEnabled = scrollbar drag enabled
aboutSupport-graphics-yes = Yes
aboutSupport-graphics-no = No
aboutSupport-graphics-mainThreadNoOMTC = main thread, no OMTC
aboutSupport-graphics-clearTypeParameters = ClearType Parameters
aboutSupport-graphics-compositing = Compositing
aboutSupport-graphics-asyncPanZoom = Asynchronous Pan/Zoom
aboutSupport-graphics-gpuActive = Active
aboutSupport-graphics-webglRenderer = WebGL Renderer
aboutSupport-graphics-hardwareH264 = Hardware H264 Decoding
aboutSupport-graphics-gpuDescription = Description
aboutSupport-graphics-gpuVendorID = Vendor ID
aboutSupport-graphics-gpuDeviceID = Device ID
aboutSupport-graphics-gpuDriverVersion = Driver Version
aboutSupport-graphics-gpuDriverDate = Driver Date
aboutSupport-graphics-gpuDrivers = Drivers
aboutSupport-graphics-gpuSubsysID = Subsys ID
aboutSupport-graphics-gpuRAM = RAM
aboutSupport-graphics-webglRenderer = WebGL Renderer
aboutSupport-blocklistedBug = Blocklisted due to known issues; <a>bug { $bugNumber }</a>
aboutSupport-unknownFailure = Blocklisted; failure code { $code }
aboutSupport-d3d11layersCrashGuard = D3D11 Compositor
aboutSupport-d3d11videoCrashGuard = D3D11 Video Decoder
aboutSupport-d3d9videoCrashGuard = D3D9 Video Decoder
aboutSupport-glcontextCrashGuard = OpenGL
aboutSupport-resetOnNextRestart = Reset on Next Restart

aboutSupport-modifiedKeyPrefsTitle = Important Modified Preferences
aboutSupport-modifiedPrefsName = Name
aboutSupport-modifiedPrefsValue = Value

aboutSupport-userJSTitle = user.js Preferences
# Don’t translate prefs-user-js-link, it’s an ID used for CSS.
aboutSupport-userJSDescription =
  | Your profile folder contains a <a id='prefs-user-js-link'>user.js file</a>,
  | which includes preferences that were not created by { brandShortName }.

aboutSupport-lockedKeyPrefsTitle = Important Locked Preferences
aboutSupport-lockedPrefsName = Name
aboutSupport-lockedPrefsValue = Value

aboutSupport-placeDatabaseTitle = Places Database
aboutSupport-placeDatabaseIntegrity = Integrity
aboutSupport-placeDatabaseVerifyIntegrity = Verify Integrity

aboutSupport-jsTitle = JavaScript
aboutSupport-jsIncrementalGC = Incremental GC

aboutSupport-a11yTitle = Accessibility
aboutSupport-a11yActivated = Activated
aboutSupport-a11yForceDisabled = Prevent Accessibility

aboutSupport-libraryVersionsTitle = Library Versions
aboutSupport-minLibVersions = Expected minimum version
aboutSupport-loadedLibVersions = Version in use

aboutSupport-experimentsTitle = Experimental Features
aboutSupport-experimentName = Name
aboutSupport-experimentId = ID
aboutSupport-experimentDescription = Description
aboutSupport-experimentActive = Active
aboutSupport-experimentEndDate = End Date
aboutSupport-experimentHomepage = Homepage
aboutSupport-experimentBranch = Branch

aboutSupport-sandboxTitle = Sandbox
aboutSupport-hasSeccompBPF = Seccomp-BPF (System Call Filtering)
aboutSupport-hasSeccompTSync = Seccomp Thread Synchronization
aboutSupport-hasUserNamespaces = User Namespaces
aboutSupport-hasPrivilegedUserNamespaces = User Namespaces for privileged processes
aboutSupport-canSandboxContent = Content Process Sandboxing
aboutSupport-canSandboxMedia = Media Plugin Sandboxing
