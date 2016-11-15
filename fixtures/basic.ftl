# FTL primer in fewer than 50 lines 

# Translations are defined with an equals sign.
robots-title = Welcome Humans!

# Multiline translations have first-class support.
robots-long-desc =
    | Robots may not injure a human being or, through inaction,
    | allow a human being to come to harm.

# Braces are used for interpolation.
# Other translations can be references by identifiers.
brand-name = Firefox
about-warning-version = { brand-name } is experimental and may be unstable.

# The dollar sigil denotes external variables passed by the developer.
about-support-unknown-failure = Blocklisted; failure code { $code }

# Some HTML can be used to provide markup for translations.
about-channel-description =
    | You are currently on the <label>{ $channel_name }</label> update channel.

# External variables can be used as the selection criteria
# for choosing one of the variants defined in the translation.
# $days (Number) - Number of days passed from the last recorded crash.
about-support-crashes-title = { $days ->
    [one]    Crash Reports for the Last { $days } day
   *[other]  Crash Reports for the Last { $days } days
}

# L20n includes a number of built-in functions for formatting numbers,
# dates and plurals with Intl formatters.
percent-complete = { NUMBER($progress, style: "percent") } complete.

# Functions may return information about the app environment; for instance
# PLATFORM() returns the name of the user's operating system.
about-support-show-dir = { PLATFORM() ->
    [windows] Show Folder
    [macos]   Show in Finder
   *[other]   Open Directory
}
